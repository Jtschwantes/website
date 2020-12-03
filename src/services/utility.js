export function formatDate(date) {
    if(!date) return 'Now';
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
    
    // let day = Number(date.split('-')[2].slice(0, 2));
    let year = date.split('-')[0];
    let month = months[Number(date.split('-')[1]) - 1];

    return `${month} ${year}`;
}