const FlashMessage = ({className, message = ''}) => {
    return (
        <div className={`flex bg-green-100 rounded border-dashed border-2 border-green-400 p-4 mb-4 text-sm text-green-700 ${className}`}>
            {message}
        </div>
    )
}

export default FlashMessage;
