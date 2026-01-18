/**
 * return phone number in the format of xxx-xxx-xxxx
 * @param phone
 */
const formatPhone = (phone: string) => {
    let formatted = ''
    const indexToInclude = [3, 6]
    if (phone.length === 10) {
        for (let i = 0; i < phone.length; i++) {
            if (indexToInclude.includes(i)) {
                formatted = formatted.concat('-')
            }
            formatted = formatted.concat(phone[i])
        }
    }
    return formatted || phone
}

export default formatPhone
