export default async function getData() {
    const data = await fetch("http://localhost:9000/testAPI");
    const json = await data.json();
    console.log(json);
    return json;
}