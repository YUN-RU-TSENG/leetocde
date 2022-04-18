function isValid(s) {
    const result = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        switch (char) {
            case ')':
                if (result.pop() !== '(') return false
                break
            case '}':
                if (result.pop() !== '{') return false
                break
            case ']':
                if (result.pop() !== '[') return false
                break
            default:
                result.push(char)
        }
    }

    return result.length === 0
}

isValid('()')
