// BUS*12 Member page
import Image from "next/image";

const members = [
  { name: "Aom", image: "/image_bus/Aom.jpg" },
  { name: "Benz", image: "/image_bus/Benz.jpg" },
  { name: "Chai", image: "/image_bus/Chai.jpg" },
  { name: "Dew", image: "/image_bus/Dew.jpg" },
  { name: "Fah", image: "/image_bus/Fah.jpg" },
  { name: "Golf", image: "/image_bus/Golf.jpg" },
  { name: "Ice", image: "/image_bus/Ice.jpg" },
  { name: "Joy", image: "/image_bus/Joy.jpg" },
  { name: "Kae", image: "/image_bus/Kae.jpg" },
  { name: "Lek", image: "/image_bus/Lek.jpg" },
  { name: "Moo", image: "/image_bus/Moo.jpg" },
  { name: "Nok", image: "/image_bus/Nok.jpg" },
];

export default function Bus_12() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">BUS*12 Member Page</h1>
      <ul className="grid grid-cols-3 gap-6 list-none">
        {members.map(({ name, image }) => (
          <li key={name} className="flex flex-col items-center">
            <Image
              src={image}
              alt={name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-lg font-medium">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
