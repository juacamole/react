import './profile.css';


export default function Profile() {
    return <div id="profile-text">
        <h1>The Company</h1>

        <p className="text" id="text0">
            Aston Martin is a British luxury sports car and grand tourer manufacturer that has become a symbol of sophistication, performance, and exclusivity. Founded in 1913 by Lionel Martin and Robert Bamford, the company initially focused on creating high-performance vehicles capable of competing in motor races. Throughout its history, Aston Martin has been synonymous with elegant design and cutting-edge technology, crafting cars that blend aesthetic appeal with exceptional driving dynamics.
        </p>

        <p className="text" id="text1"> The brand gained worldwide fame partly due to its association with the James Bond film series, starting with the iconic DB5 model featured in "Goldfinger" in 1964. This partnership with the world of espionage and adventure cemented Aston Martin's image as a purveyor of vehicles for the discerning and daring.
        </p>

        <img src={"https://www.secret-classics.com/wp-content/uploads/2020/09/astonmartindb5vantage-1.jpg"} id={"image-db5"}/>

        <q id={"image-quote-db5"}>Image of an Aston Martin DB5</q>

        <p className="text" id="text2">Despite facing financial challenges over the years, Aston Martin has preserved its heritage while innovating for the future. Today, the company offers a range of vehicles that include not only traditional sports cars but also luxury SUVs, like the DBX, catering to a broader audience. With a commitment to craftsmanship and performance, Aston Martin continues to push the boundaries of automotive excellence, embracing new technologies such as electrification to ensure its place in the future of luxury motoring.
        </p>
    </div>
}