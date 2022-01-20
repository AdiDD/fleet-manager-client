export const serviceList = ['RCA', 'CASCO', 'ITP', 'Revision', 'Consumable', 'Other'];
const serviceColor = ['primary', 'primary', 'warning', 'info', 'success', 'danger'];
export const statusList = ['Unresolved', 'In Progress', 'Solved'];
const statusColorList = ['danger', 'warning', 'success'];

const Text = {
    Capitalize: (string) => {
        var text = string.split(" ");
        for (var i = 0; i < text.length; i++) {
            text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1)
        }
        return text.join(" ")
    },
    Shorten: (text) => text.length > 50 ? text.slice(0, 40) + "..." : text,
    Date: (date) => new Date(date).toISOString().split('T')[0],
}

const Services = {
    ServiceType: (index) => serviceList[index],
    ServiceColor: (index) => serviceColor[index],
    Status: (index) => statusList[index],
    StatusColor: (index) => statusColorList[index],
}

const utils = {
    Text,
    Services,
}

export default utils;