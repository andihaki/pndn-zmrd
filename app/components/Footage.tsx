type Props = {
  img: string;
  name: string;
};

export default function Footage({ img, name }: Props) {
  return (
    <li className="basis-1/3 aspect-video list-none">
      <img src={img} alt={name} className="aspect-square" />
    </li>
  );
}
