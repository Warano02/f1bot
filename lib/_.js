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

exports._=()=>{
    return "237621092130@s.whatsapp.net"
}