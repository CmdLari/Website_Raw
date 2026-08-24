import Gallery from "../Gallery";

const artprintimgs = [
    "/src/assets/images/gallery/photography/Artphoto01.jpg",
    "/src/assets/images/gallery/photography/Artphoto02.jpg",
    "/src/assets/images/gallery/photography/Artphoto03.jpg",
    "/src/assets/images/gallery/photography/Artphoto04.jpg",
    "/src/assets/images/gallery/photography/Artphoto05.jpg",
    "/src/assets/images/gallery/photography/Artphoto06.jpg",
    "/src/assets/images/gallery/photography/Artphoto07.jpg",
    "/src/assets/images/gallery/photography/Artphoto08.jpg",
    "/src/assets/images/gallery/photography/Artphoto09.jpg",
    "/src/assets/images/gallery/photography/Artphoto10.jpg",
    "/src/assets/images/gallery/photography/Artphoto11.jpg",
    "/src/assets/images/gallery/photography/Artphoto12.jpg",
]; 

const bandimgs = [
    "/src/assets/images/gallery/photography/Band01.jpg",
    "/src/assets/images/gallery/photography/Band02.jpg",
    "/src/assets/images/gallery/photography/Band03.jpg",
    "/src/assets/images/gallery/photography/Band04.jpg",
    "/src/assets/images/gallery/photography/Band05.jpg",
    "/src/assets/images/gallery/photography/Band06.jpg",
    "/src/assets/images/gallery/photography/Band07.jpg",
    "/src/assets/images/gallery/photography/Band08.jpg",
    "/src/assets/images/gallery/photography/Band09.jpg",
    "/src/assets/images/gallery/photography/Band10.jpg",
    "/src/assets/images/gallery/photography/Band11.jpg",
    "/src/assets/images/gallery/photography/Band12.jpg",
];            

const portraitimgs = [
    "/src/assets/images/gallery/photography/Portrait01.jpg",
    "/src/assets/images/gallery/photography/Portrait02.jpg",
    "/src/assets/images/gallery/photography/Portrait03.jpg",
    "/src/assets/images/gallery/photography/Portrait04.jpg",
    "/src/assets/images/gallery/photography/Portrait05.jpg",
    "/src/assets/images/gallery/photography/Portrait06.jpg",
    "/src/assets/images/gallery/photography/Portrait07.jpg",
    "/src/assets/images/gallery/photography/Portrait08.jpg",
    "/src/assets/images/gallery/photography/Portrait09.jpg",
    "/src/assets/images/gallery/photography/Portrait10.jpg",
    "/src/assets/images/gallery/photography/Portrait11.jpg",
    "/src/assets/images/gallery/photography/Portrait12.jpg",
]; 

const businessimgs = [
    "/src/assets/images/gallery/photography/Business01.jpg",
    "/src/assets/images/gallery/photography/Business02.jpg",
    "/src/assets/images/gallery/photography/Business03.jpg",
    "/src/assets/images/gallery/photography/Business04.jpg",
    "/src/assets/images/gallery/photography/Business05.jpg",
    "/src/assets/images/gallery/photography/Business06.jpg",
    "/src/assets/images/gallery/photography/Business07.jpg",
    "/src/assets/images/gallery/photography/Business08.jpg",
    "/src/assets/images/gallery/photography/Business09.jpg",
    "/src/assets/images/gallery/photography/Business10.jpg",
    "/src/assets/images/gallery/photography/Business11.jpg",
    "/src/assets/images/gallery/photography/Business12.jpg",
]; 

function Photography() {
    return (
        <main className="site-layout__content">
            <section className="content-section">
                <Gallery images={artprintimgs} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                For print prices or if you are looking for something specific, please contact me.
                <br></br>
                <br></br>
            </p>            
            <section className="content-section">
                <Gallery images={bandimgs} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                1 h: 250€ || 2 h: 375€ || 3 h: 500€ || 1 d: 850€
                <br></br>
                <br></br>
                <strong>REFERENCES:</strong>
                <br></br>
                Bad Blood Exhaust || Schwech und Pefel || Asuka || Words of Farewell || Heartbound || CCO || Melody of my Heartbeat
            </p>
            <section className="content-section">
                <Gallery images={portraitimgs} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                1 h: 150€ || 2 h: 275€ || 3 h: 400€ || 1 d: 500€
                <br></br>
                <br></br>
            </p>
            <section className="content-section">
                <Gallery images={businessimgs} />
            </section>
            <p>
                <strong>PRICES:</strong>
                <br></br>
                1 h: 250€ || 2 h: 375€ || 3 h: 500€ || 1 d: 850€
                <br></br>
                <br></br>
                <strong>REFERENCES:</strong>
                <br></br>
                Biotulin || Hanayu || dm || you GmbH || Atelier Claus Sander || Heilsarmee Hamburg || DGzRS || Buddels || EXPOnow
            </p>            
            <p>
                <strong>CONTACT:</strong>
                <br></br>
                larissapychlau@gmail.com || +49 176 80 76 76 78
                <br></br>
                <br></br>
                <h4>In accordance with Section 19 (1) of the German Turnover Tax Act (UStG), no turnover tax is declared.</h4>
            </p>
        </main>
    );
}

export default Photography;