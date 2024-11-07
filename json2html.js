// json2html.js

export default function json2html(data) {
  // Start table with required data-user attribute
  let html = `<table data-user="endrapu.saisushanth2003@gmail.com">`;
  html += `<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>`;
  html += `<tbody>`;

  // Generate rows
  data.forEach((item) => {
    html += `<tr><td>${item.Name}</td><td>${item.Age}</td>`;
    html += item.Gender ? `<td>${item.Gender}</td>` : ``;
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  return html;
}
