import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        img: "http://www.clipartbest.com/cliparts/nTB/Bpx/nTBBpxjzc.png",
        stat: "",
      },
      {
        id: 1,
        img: "http://www.clipartbest.com/cliparts/nTB/Bpx/nTBBpxjzc.png",
        stat: "",
      },
      {
        id: 2,
        img: "https://i.pinimg.com/originals/80/dc/86/80dc86d0e3e6afcf19262433136033d8.png",
        stat: "",
      },
      {
        id: 2,
        img: "https://i.pinimg.com/originals/80/dc/86/80dc86d0e3e6afcf19262433136033d8.png",
        stat: "",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-vector/face-blush-cartoon-style-vector_406207-116.jpg",
        stat: "",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-vector/face-blush-cartoon-style-vector_406207-116.jpg",
        stat: "",
      },
      {
        id: 4,
        img: "https://media.istockphoto.com/vectors/pink-nail-polish-bottle-and-brush-vector-id1345024292",
        stat: "",
      },
      {
        id: 4,
        img: "https://media.istockphoto.com/vectors/pink-nail-polish-bottle-and-brush-vector-id1345024292",
        stat: "",
      },
      {
        id: 5,
        img: "https://image.shutterstock.com/image-vector/doodle-icon-foundation-cream-bottle-260nw-506083849.jpg",
        stat: "",
      },
      {
        id: 5,
        img: "https://image.shutterstock.com/image-vector/doodle-icon-foundation-cream-bottle-260nw-506083849.jpg",
        stat: "",
      },
      {
        id: 6,
        img: "https://previews.123rf.com/images/moonbo0/moonbo01606/moonbo0160600050/57763507-beauty-blender-makeup-sponge.jpg",
        stat: "",
      },
      {
        id: 6,
        img: "https://previews.123rf.com/images/moonbo0/moonbo01606/moonbo0160600050/57763507-beauty-blender-makeup-sponge.jpg",
        stat: "",
      },
      {
        id: 7,
        img: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-hand-painted-colorful-eye-shadow-cosmetics-png-image_4501794.jpg",
        stat: "",
      },
      {
        id: 7,
        img: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-hand-painted-colorful-eye-shadow-cosmetics-png-image_4501794.jpg",
        stat: "",
      },
      {
        id: 8,
        img: "https://media.istockphoto.com/vectors/eyeliner-liquid-3d-liner-cosmetics-template-female-cosmetic-tube-vector-id1140794274?s=612x612",
        stat: "",
      },
      {
        id: 8,
        img: "https://media.istockphoto.com/vectors/eyeliner-liquid-3d-liner-cosmetics-template-female-cosmetic-tube-vector-id1140794274?s=612x612",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
