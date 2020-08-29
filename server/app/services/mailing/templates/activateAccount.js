/**
 * Send confirmation email with activating link
 */
module.exports = {
  /**
   * Subject of the email
   * @param {String} username Firstname of the recipient
   */
  getSubject: username => {
    return `Bienvenue sur iTongue ${username}`;
  },

  /**
   * Plain text template message
   * @param {String} username Firstname of the recipient
   * @param {String} activateLink Users's activation url
   */
  getPlain: (username, activateLink) => {
    return `
    
    Bienvenue sur iTongue ${username}
    
    ================

    Nous sommes très heureux de te compter parmi nous !
    Une petite dernière chose à faire, activer ton compte en cliquant sur ce lien:
    ${activateLink}

    ================

    Avec iTongue tu peux :
    ----------------------
    * Consulter notre catalogue d'expressions
    * Écouter la prononciation des expressions dans 5 langues. 
    * T'enregistrer en prononçant des expressions et comparer avec d'autres membres.
    * Suivre d'autres membres

    ================

    Si tu as des questions, n'hésite pas à nous les poser en répondant directement à cet email, nous serons toujours très heureux d'y répondre !
    Si tu es timide ou que tu préfères lire, tu peux aussi consulter notre FAQ :
    https://localhost:3000/faq

    A très vite 👋 
    L'équipe iTongue
    
    ================

    Tu as reçu cet email car tu viens de t'enregistrer sur iTongue.
    Si tu ne veux plus recevoir nos email, tu peux te désinscrire en naviguant sur ce lien : https://localhost:3000/unsubscribe

    `;
  },

  /**
   * HTML template message
   * @param {String} username Firstname of the recipient
   * @param {String} activateLink Users's activation url
   */
  getHtml: (username, activateLink) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @font-face {
        font-family: "Pacifico";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("Pacifico Regular"), local("Pacifico-Regular"),
          url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @media (max-width: 720px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col > div {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num8 {
          width: 66% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    class="clean-body"
    style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff"
  >
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table
      bgcolor="#FFFFFF"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        table-layout: fixed;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
        width: 100%;
      "
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top" valign="top">
          <td style="word-break: break-word; vertical-align: top" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
            <div style="background-color: #ffffff">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 0px;
                                  padding-right: 0px;
                                  padding-bottom: 0px;
                                  padding-left: 0px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="30"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    height: 30px;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr style="vertical-align: top" valign="top">
                                      <td
                                        height="30"
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid two-up no-stack"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="350" style="background-color:transparent;width:350px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:10px; padding-bottom:10px;"><![endif]-->
                  <div
                    class="col num6"
                    style="
                      min-width: 320px;
                      max-width: 350px;
                      display: table-cell;
                      vertical-align: top;
                      width: 350px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 10px;
                          padding-bottom: 10px;
                          padding-right: 20px;
                          padding-left: 20px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                              'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                                'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                              color: #555555;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 50px;
                                line-height: 1.2;
                                font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande',
                                  'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                word-break: break-word;
                                mso-line-height-alt: 60px;
                                margin: 0;
                              "
                            >
                              <span style="color: #fe734c; font-size: 20px"
                                ><strong
                                  ><a
                                    href="http://localhost:3000"
                                    rel="noopener"
                                    style="
                                      font-family: 'Pacifico', arial, sans-serif;
                                      text-decoration: none;
                                      color: #fe734c;
                                    "
                                    target="_blank"
                                    >iTongue</a
                                  ></strong
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="350" style="background-color:transparent;width:350px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num6"
                    style="
                      min-width: 320px;
                      max-width: 350px;
                      display: table-cell;
                      vertical-align: top;
                      width: 350px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <div></div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              style="
                background-image: url('');
                background-position: top center;
                background-repeat: no-repeat;
                background-color: #ffffff;
              "
            >
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('');background-position:top center;background-repeat:no-repeat;background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 60px; padding-left: 60px; padding-top:60px; padding-bottom:60px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 60px;
                          padding-bottom: 60px;
                          padding-right: 60px;
                          padding-left: 60px;
                        "
                      >
                        <!--<![endif]-->
                        <div
                          align="center"
                          class="img-container center autowidth"
                          style="padding-right: 0px; padding-left: 0px"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                          [endif]--><img
                            align="center"
                            alt="Alternate text"
                            border="0"
                            class="center autowidth"
                            src="https://media.giphy.com/media/ehmupaq36wyALTJce6/giphy.gif"
                            style="
                              text-decoration: none;
                              -ms-interpolation-mode: bicubic;
                              height: auto;
                              border: 0;
                              width: 100%;
                              max-width: 480px;
                              display: block;
                            "
                            title="Alternate text"
                            width="480"
                          />
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              style="
                background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/286/bg_wave_1.png');
                background-position: top center;
                background-repeat: repeat;
                background-color: #f4f4f4;
              "
            >
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/286/bg_wave_1.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="70"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    height: 70px;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr style="vertical-align: top" valign="top">
                                      <td
                                        height="70"
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f4f4f4">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:50px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 50px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 10px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                              'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 30px;
                            padding-bottom: 0px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.2;
                              font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                                'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                              color: #555555;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                font-family: Montserrat, Trebuchet MS, Lucida Grande,
                                  Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              <strong
                                ><span style="font-size: 46px"
                                  >Bienvenue,
                                  <span style="font-size: 46px; color: #fe734c">${username} </span
                                  >!</span
                                ></strong
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 15px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.5;
                            padding-top: 15px;
                            padding-right: 30px;
                            padding-bottom: 5px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.5;
                              color: #555555;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                word-break: break-word;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                              <strong
                                ><span style="font-size: 20px"
                                  >Nous sommes très heureux de te compter parmi nous !</span
                                ></strong
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 15px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #7c7c7c;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.5;
                            padding-top: 15px;
                            padding-right: 30px;
                            padding-bottom: 20px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.5;
                              color: #7c7c7c;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                word-break: break-word;
                                mso-line-height-alt: 24px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 16px"
                                >Une toute dernière petite chose à faire, activer ton compte en
                                cliquant sur ce bouton</span
                              >
                            </p>
                            <p
                              style="
                                font-size: 12px;
                                line-height: 1.5;
                                word-break: break-word;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <div
                          align="center"
                          class="button-container"
                          style="
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/activateLink" style="height:54pt; width:196.5pt; v-text-anchor:middle;" arcsize="13%" stroke="false" fillcolor="#fe734c"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:26px"><!
                          [endif]--><a
                            href="${activateLink}"
                            style="
                              -webkit-text-size-adjust: none;
                              text-decoration: none;
                              display: inline-block;
                              color: #ffffff;
                              background-color: #fe734c;
                              border-radius: 9px;
                              -webkit-border-radius: 9px;
                              -moz-border-radius: 9px;
                              width: auto;
                              width: auto;
                              border-top: 1px solid #fe734c;
                              border-right: 1px solid #fe734c;
                              border-bottom: 1px solid #fe734c;
                              border-left: 1px solid #fe734c;
                              padding-top: 10px;
                              padding-bottom: 10px;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              text-align: center;
                              mso-border-alt: none;
                              word-break: keep-all;
                            "
                            target="_blank"
                            ><span
                              style="
                                padding-left: 45px;
                                padding-right: 45px;
                                font-size: 26px;
                                display: inline-block;
                              "
                              ><span
                                style="
                                  font-size: 16px;
                                  line-height: 2;
                                  word-break: break-word;
                                  mso-line-height-alt: 32px;
                                "
                                ><span
                                  data-mce-style="font-size: 26px; line-height: 52px;"
                                  style="font-size: 26px; line-height: 52px"
                                  ><strong>Activer</strong></span
                                ></span
                              ></span
                            ></a
                          >
                          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #555555;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              Tu peux aussi cliquer sur ce lien ou le coller directement dans ton
                              navigateur
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              <a
                                href="${activateLink}"
                                rel="noopener"
                                style="text-decoration: underline; color: #fe734c"
                                target="_blank"
                                >${activateLink}</a
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f4f4f4">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffffff;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#FFFFFF;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 5px;
                          padding-left: 5px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 35px; padding-top: 25px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #444444;
                            font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                              'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                            line-height: 1.2;
                            padding-top: 25px;
                            padding-right: 10px;
                            padding-bottom: 0px;
                            padding-left: 35px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.2;
                              font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande',
                                'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                              color: #444444;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                font-family: Montserrat, Trebuchet MS, Lucida Grande,
                                  Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              <span style="background-color: #ffffff; font-size: 14px"
                                ><span style="font-size: 24px; background-color: #ffffff"
                                  ><span style="font-size: 24px; background-color: #ffffff"
                                    >Avec iTongue tu peux :</span
                                  ></span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 30px; padding-top: 15px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.8;
                            padding-top: 15px;
                            padding-right: 20px;
                            padding-bottom: 30px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.8;
                              font-size: 12px;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              color: #555555;
                              mso-line-height-alt: 22px;
                            "
                          >
                            <ul style="list-style-type: square">
                              <li
                                style="line-height: 1.8; font-size: 16px; mso-line-height-alt: 29px"
                              >
                                <span style="font-size: 16px"
                                  >Consulter notre catalogue d'expressions</span
                                >
                              </li>
                              <li
                                style="line-height: 1.8; font-size: 16px; mso-line-height-alt: 29px"
                              >
                                <span style="font-size: 16px">
                                  Écouter la prononciation des expressions dans 5 langues.</span
                                >
                              </li>
                              <li
                                style="line-height: 1.8; font-size: 16px; mso-line-height-alt: 29px"
                              >
                                <span style="font-size: 16px"
                                  >T'enregistrer en prononçant des expressions</span
                                >
                              </li>
                              <li
                                style="line-height: 1.8; font-size: 16px; mso-line-height-alt: 29px"
                              >
                                <span style="font-size: 16px"
                                  >Comparer ta prononciation avec d'autres membres.</span
                                >
                              </li>
                              <li
                                style="line-height: 1.8; font-size: 16px; mso-line-height-alt: 29px"
                              >
                                <span style="font-size: 16px"
                                  >Suivre les autres membres de ton choix</span
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f4f4f4">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 1px solid #bbbbbb;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr style="vertical-align: top" valign="top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f4f4f4">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffffff;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#ffffff;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 5px;
                          padding-left: 5px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 30px; padding-top: 15px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.8;
                            padding-top: 15px;
                            padding-right: 20px;
                            padding-bottom: 30px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.8;
                              font-size: 12px;
                              color: #555555;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 22px;
                            "
                          >
                            <p
                              style="
                                text-align: center;
                                line-height: 1.8;
                                word-break: break-word;
                                font-size: 14px;
                                mso-line-height-alt: 25px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px"
                                >Si tu as des questions, n'hésite pas à nous les poser en répondant
                                directement à cet email, nous serons toujours très heureux d'y
                                répondre !</span
                              >
                            </p>
                            <p
                              style="
                                text-align: center;
                                line-height: 1.8;
                                word-break: break-word;
                                mso-line-height-alt: 22px;
                                margin: 0;
                              "
                            >
                               
                            </p>
                            <p
                              style="
                                text-align: center;
                                line-height: 1.8;
                                word-break: break-word;
                                mso-line-height-alt: 22px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px"
                                >Si tu es timide ou que tu préfères lire, tu peux aussi consulter
                                notre
                                <a
                                  href="http://localhost:3000/faq"
                                  rel="noopener"
                                  style="text-decoration: underline; color: #fe734c"
                                  target="_blank"
                                  >FAQ</a
                                ></span
                              > 😉
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f4f4f4">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:60px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 25px;
                          padding-bottom: 60px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.8;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.8;
                              font-size: 12px;
                              color: #555555;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 22px;
                            "
                          >
                            <p
                              style="
                                font-size: 18px;
                                line-height: 1.8;
                                word-break: break-word;
                                mso-line-height-alt: 32px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 18px"><strong>A très vite</strong> 👋 </span>
                            </p>
                            <p
                              style="
                                line-height: 1.8;
                                word-break: break-word;
                                font-size: 14px;
                                mso-line-height-alt: 25px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 14px">L'équipe iTongue</span> 
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              style="
                background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/286/bg_wave_2.png');
                background-position: top center;
                background-repeat: repeat;
                background-color: #f4f4f4;
              "
            >
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/286/bg_wave_2.png);background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="70"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    height: 70px;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr style="vertical-align: top" valign="top">
                                      <td
                                        height="70"
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #ffffff">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #ffffff;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#FFFFFF;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:35px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 35px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #838383;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.5;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.5;
                              color: #838383;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: center;
                                word-break: break-word;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              <span style="color: #000000; font-size: 14px"
                                ><strong>iTongue</strong></span
                              >, apprends de nouvelles expressions.
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: center;
                                word-break: break-word;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              2 Rue Nogué, 64000 Pau
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="social_icons"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_table"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-tspace: 0;
                                    mso-table-rspace: 0;
                                    mso-table-bspace: 0;
                                    mso-table-lspace: 0;
                                  "
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      align="center"
                                      style="
                                        vertical-align: top;
                                        display: inline-block;
                                        text-align: center;
                                      "
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 5px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a href="https://www.facebook.com/" target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="https://img.icons8.com/android/344/facebook.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 5px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a href="https://twitter.com/" target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="https://img.icons8.com/ios-glyphs/344/instagram-new.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 5px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a href="https://instagram.com/" target="_blank"
                                          ><img
                                            alt="Instagram"
                                            height="32"
                                            src="https://img.icons8.com/android/344/twitter.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Instagram"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 5px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a href="https://www.linkedin.com/" target="_blank"
                                          ><img
                                            alt="LinkedIn"
                                            height="32"
                                            src="https://img.icons8.com/android/344/linkedin.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="LinkedIn"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 700px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 700px;
                      display: table-cell;
                      vertical-align: top;
                      width: 700px;
                    "
                  >
                    <div style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #555555;
                              font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                text-align: center;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 14px;
                                margin: 0;
                              "
                            >
                              <span style="color: #c7c7c7"
                                >Tu as reçu cet email car tu viens de t'enregistrer sur
                                iTongue.</span
                              >
                            </p>
                            <p
                              style="
                                text-align: center;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 14px;
                                margin: 0;
                              "
                            >
                              <span style="color: #c7c7c7"
                                >Si tu ne veux plus recevoir nos email, tu peux te
                                <a
                                  href="https://localhost:3000/unsubscribe"
                                  rel="noopener"
                                  style="text-decoration: underline; color: #fe734c"
                                  target="_blank"
                                  >désinscrire</a
                                >.</span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
</html>

    `;
  }
};
