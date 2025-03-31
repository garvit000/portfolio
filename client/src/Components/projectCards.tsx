interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
function projectCards({
    title,
    description,
    imageUrl,
    link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-pink-300 to-yellow-300 p-5 rounded-3xl mb-10 w-auto">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-gray-800 mt-2 mb-3 text-center">{description}</p>
        <a href={link} target="_blank" className="bg-amber-50 rounded-2xl mt-3 mb-4 p-3 hover:text-xl transition-all duration-300">View Project</a>
        <img src={imageUrl} alt={title} className="h-48 object-cover rounded-2xl" />
    </div>
  );
}
export default projectCards;