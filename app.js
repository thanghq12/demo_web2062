const customerList = document.getElementById('customer-list');
let customers = [];
getCustomer();
// tạo ra hàm lấy danh sách khách hàng xuống 
function getCustomer() {
    // thực hiện gọi API từ phía json server 
    fetch('http://localhost:3001/customer')
    .then(response => response.json())
    .then(data=> {
        customers = data;
        displayCustomer();
    })
    
}
// tạo ra 1 mảng customer s

function displayCustomer () {
    customerList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Tên khách hàng</th>
                    <th>Lương</th>
                    <th>hành động </th>
                <tr>
            </thead>
            <tbody>
                ${customers.map(customer=>`
                 <tr>
                    <th>${customer.ten}</th>
                    <th>${customer.luong}</th>
                    <th>hành động </th>
                <tr>
                `).join('')}
               
            </tbody>
        </table>
    `
}