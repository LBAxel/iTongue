import React, { useState } from "react";
import { Card, Icon, Confirm, Image } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import AudioPlayer from "../../containers/Audio";
import HeaderIrecord from "./headerIrecord";

const Irecord = ({
    record,
    selectIrecordToRecord,
    setTranslationId,
    toggleRecording,
    isRecording,
    user,
    isLogged,
    currentUser,
    deleteIrecord,
    isUserRecord,
}) => {
    const [selectediRecordId, setSelectediRecordId] = useState(null);
    const [open, setOpen] = useState(false);

    const handleCopyiRecord = () => {
        setSelectediRecordId(record.id);
        selectIrecordToRecord(record);
        setTranslationId(record.translation.id);
        toggleRecording(true);

        if (isRecording && selectediRecordId === record.id) {
            toggleRecording(false);
        } else {
            toggleRecording(true);
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        deleteIrecord(record.id);
    };
    return (
        <div className="irecords">
            <Card className="irecords-container" key={record.id}>
                <Confirm
                    className="delete-irecords"
                    open={open}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    cancelButton="Annuler"
                    confirmButton="Supprimer"
                    content="Vous êtes sûr de vouloir supprimer ce iRecord ?"
                />
                {!isLogged && <HeaderIrecord user={user} />}
                {!isMobile && isLogged && currentUser.id === isUserRecord && (
                    <HeaderIrecord user={user}>
                        <Icon
                            onClick={() => deleteIrecord(record.id)}
                            className="header-irecords__copy-delete"
                            name="trash alternate outline"
                        />
                    </HeaderIrecord>
                )}
                {isLogged && currentUser.id !== isUserRecord && (
                    <HeaderIrecord user={user}>
                        <Icon
                            onClick={handleCopyiRecord}
                            className="header-irecords__copy-delete"
                            name="copy"
                        />
                    </HeaderIrecord>
                )}
                <Card.Content className="irecords__text">
                    <p>
                        <Image
                            src={`https://www.countryflags.io/${record.englishTranslation.language.code}/flat/32.png`}
                            className="flag_image"
                        />
                        {record.englishTranslation.text}
                    </p>
                </Card.Content>
                {record.englishTranslation.language.code !==
                    record.translation.language.code && (
                    <Card.Content className="irecords__text">
                        <p>
                            <Image
                                src={`https://www.countryflags.io/${record.translation.language.code}/flat/32.png`}
                                className="flag_image"
                            />
                            {record.translation.text}
                        </p>
                    </Card.Content>
                )}
                <AudioPlayer audio={record} />
            </Card>
        </div>
    );
};

export default Irecord;