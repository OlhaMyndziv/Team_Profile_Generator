const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;

}
.banner-bar {
    background-color:#0078D7 ;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 8vw;
}
p {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(228, 174, 76);
    border: 2px solid rgb(228, 174, 76);
    width: 246px;
    border-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;