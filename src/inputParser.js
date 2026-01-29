export default function inputParser(input) {
    return input.split("\n")
                .map(code => code.trim().toUpperCase())
}