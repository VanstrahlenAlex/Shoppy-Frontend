export const getErrorMessage = (response: any) => {
	if(response.message){
		if(Array.isArray(response.message)){
			return formatErrorMessage(response.message[0]);
		}
		return formatErrorMessage(response.message);
	}
	return "Unknown Error ocurred"
}

const formatErrorMessage = (message: string) => {
	return message.charAt(0).toUpperCase() + message.slice(1);
}