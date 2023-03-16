exports.get404=(request, response, next)=>{
    response.status(404).json({
        message: 'Not Found!'
    });
}

exports.get500=(error, request, response, next)=>{
    const message=error.message;
    response.status(500).json({
        message: message
    });
}