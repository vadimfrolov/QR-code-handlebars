
const inquireForm = document.getElementById('newpost');
console.log(inquireForm)
// const inquireForm = document.getElementById('qrshowonpage');

inquireForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = await {
    post: document.getElementById("post").value }
  console.log(data)

  const resp = await fetch("/makenewqr", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    });

    const json = await resp.json();
    const imgPlace = document.getElementById('qrcode');
    imgPlace.src = json.img 
    document.getElementById("qrcode").style.display = "inline";

})