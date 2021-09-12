export function formatPhone(phone: string) {
  const country = phone.charAt(0)
  const city = phone.slice(1, 4)
  const dashed = [phone.slice(4, 7), phone.slice(7, 9), phone.slice(9, 11)]

  return `${country} (${city}) ${dashed.join("-")}`
}
