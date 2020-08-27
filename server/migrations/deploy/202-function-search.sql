-- Deploy itongue:202-function-search to pg

BEGIN;

CREATE OR REPLACE FUNCTION "find_users"("expression" TEXT)
RETURNS setof "user_with_relations"
AS $$

    SELECT *
      FROM "user_with_relations" "u"
     WHERE "u"."firstname"
     ILIKE '%' || "expression" || '%'
        OR "u"."lastname"
     ILIKE '%' || "expression" || '%';

$$ LANGUAGE SQL STABLE;


CREATE OR REPLACE FUNCTION "find_records"("expression" TEXT)
RETURNS setof "record_display"
AS $$

  SELECT *
    FROM "record_display" "r"
   WHERE "r"."translation"->>'text'
   ILIKE '%' || "expression" || '%';

$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION "find_users_records"("expression" TEXT)
RETURNS TABLE("users" "user_with_relations", "records" "record_display")
AS $$

    -- SELECT "find_users"("expression") AS "users";
    -- SELECT "find_records"("expression") AS "records";
    SELECT  "find_users"("expression") AS "users",  "find_records"("expression") AS "records";

$$ LANGUAGE SQL STABLE;


COMMIT;