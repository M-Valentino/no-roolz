import Image from "next/image";
const getEmoji = require('get-random-emoji');

export default function Home() {
  const powerballStyle = {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    textAlign: "center",
    paddingTop: 5,
  };
  const getTextDecoration = (index) => {
    const randColor = `#${((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0")}`;
    if (index === 12) {
      return `underline overline ${randColor}`;
    } else if (Math.floor(Math.random() * (4 - 1) + 1) === 1) {
      return `wavy underline ${randColor}`;
    } else if (index % 2 === 0) {
      return `underline ${randColor}`;
    } else if (index % 3 === 0) {
      return `underline dotted`;
    }
    return "none";
  };
  const getFontFamily = () => {
    if (Math.floor(Math.random() * (4 - 1) + 1) === 1) {
      return "cursive";
    } else if (Math.floor(Math.random() * (4 - 1) + 1) === 2) {
      return "fantasy";
    } else if (Math.floor(Math.random() * (4 - 1) + 1) === 3) {
      return "sans-serif";
    }
    return "serif";
  };
  return (
    <main>
      <div
        style={{
          padding: 10,
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 2%, rgba(255,255,255,1) 3%, rgba(110,110,255,1) 17%, rgba(0,0,0,1) 20%, rgba(255,241,170,1) 24%, rgba(0,0,0,1) 26%, rgba(255,255,255,1) 27%, rgba(0,0,0,1) 32%, rgba(255,255,255,1) 34%, rgba(224,0,0,1) 48%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 51%, rgba(71,1,81,1) 63%, rgba(0,0,0,1) 65%, rgba(2,218,70,1) 77%, rgba(0,0,0,1) 79%, rgba(255,119,0,1) 97%, rgba(0,0,0,1) 99%)",
        }}
      >
        {Array.apply(null, { length: 30 }).map((_, index) => (
          <div
            key={index}
            style={{
              fontSize: Math.floor(Math.random() * (90 - 1) + 1),
              fontWeight: index % 2 === 0 ? "bold" : "initial",
              color: `rgb(${Math.floor(Math.random() * (255 - 1) + 12)},
            ${Math.floor(Math.random() * (255 - 1) + 13)},
            ${Math.floor(Math.random() * (255 - 1) + 14)}
            )`,
              textAlign:
                index % 3 === 0 ? "right" : index % 4 === 0 ? "center" : "left",
              transform: `rotate(${index % 2 === 0 ? "" : "-"}${
                (index % 7) * 27
              }deg)`,
              textShadow: `1px 1px 10px #${Math.floor(
                Math.random() * (2 - 1) + 1
              )}${Math.floor(Math.random() * (2 - 1) + 1)}${Math.floor(
                Math.random() * (2 - 1) + 1
              )}, 5px 5px 50px #${Math.floor(
                Math.random() * (9 - 1) + 1
              )}${Math.floor(Math.random() * (9 - 1) + 1)}${Math.floor(
                Math.random() * (9 - 1) + 1
              )}`,
              textDecoration: getTextDecoration(index),
              fontFamily: getFontFamily(),
            }}
          >
            NO ROOLZ
          </div>
        ))}
        {Array.apply(null, { length: 1440 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 400,
              right: 500,
              height: 1,
              width: 900,
              transform: `rotate(${index}deg)`,
              backgroundColor: `#${((Math.random() * 0xffffff) << 0)
                .toString(16)
                .padStart(6, "0")}`,
            }}
          />
        ))}
        {Array.apply(null, { length: 1440 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 1200,
              right: 500,
              height: 1,
              width: 400,
              transform: `rotate(${index}deg) translate(${index * 0.125}px, ${
                index * 0.125
              }px)`,
              backgroundColor: `#${((Math.random() * 0xffffff) << 0)
                .toString(16)
                .padStart(6, "0")}`,
            }}
          />
        ))}
        {Array.apply(null, { length: 1440 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 2200,
              left: 500,
              height: 50,
              width: 50,
              transform: `rotate(${Math.floor(Math.random() * (400 - 1 + 1)) + index}deg) translate(${index * 0.25}px, ${
                index * 0.7
              }px)`,
              backgroundColor: `#${((Math.random() * 0xffffffff) << 0)
                .toString(16)
                .padStart(6, "0")}`,
              borderRadius: index % 2 === 0 ? 25 : 0,
            }}
          >
            {getEmoji()}
            </div>
        ))}
        <div
          className="fixed left-0 top-11 text-green-400 pl-10"
          style={{
            width: 500,
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage:
              "linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(60deg, #041c5777 25%, transparent 25.5%, transparent 75%, #041c5777 75%, #041c5777), linear-gradient(60deg, #041c5777 25%, transparent 25.5%, transparent 75%, #041c5777 75%, #041c5777)",
            backgroundSize: "20px 35px",
            backgroundPosition:
              "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 1px 1px 100px #f00, 1px 1px 10px #000",
              borderBottomRightRadius: "50%",
          }}
        >
          Hello and welcome to this website. As you can see, I like to abuse
          CSS. Most websites have text and image you can read, so to satisfy the
          text requirement, here is a poem about CSS generated by AI:
          <hr />
          In a world of code and web&apos;s embrace, Lies a language with style and
          grace. CSS, the artist&apos;s tool refined, Crafting pages, each design
          defined. Selectors dance with elegant might, Grasping elements,
          painting light. With cascading rules, they entwine, Bringing beauty to
          each design. From margins small to colors bold, Properties weave, a
          sight to behold. Layouts flex, grids structured fine, Responsive to
          screens, each pixel in line. Transitions glide with fluid ease,
          Animations breathe, a digital breeze. Transformations spin and sway,
          Bringing pages to life, night and day. In the realm where aesthetics
          reign, CSS, the brush that doesn&apos;t wane. A symphony of style it sings,
          Creating web&apos;s most beautiful things.
          <hr />
          <h3 style={{ textAlign: "center" }}>Your Lucky Powerball Numbers</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={powerballStyle}>
              {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
            </div>
            <div style={powerballStyle}>
              {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
            </div>
            <div style={powerballStyle}>
              {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
            </div>
            <div style={powerballStyle}>
              {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
            </div>
            <div style={powerballStyle}>
              {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
            </div>
            <div
              style={{
                backgroundColor: "#f00",
                width: 30,
                maxHeight: 30,
                borderRadius: 15,
                marginRight: 10,
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              {Math.floor(Math.random() * (26 - 1 + 1)) + 1}
            </div>
          </div>
          <Image
            src="/handhake.png"
            quality={70}
            width={200}
            height={200}
            alt="handshaking"
          />
        </div>
        
      </div>
    </main>
  );
}
