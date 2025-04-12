export function getCookieValue(name){
    const value = document.cookie.split("; ").find((row) => row.startsWith(name + "="));
    return value ? decodeURIComponent(value.split("=")[1]) : null;
}