

const ProductItem = (props) => {

  const {category, imgUrl, name, content} = props;

  return (
    <div className="bg-black-700 border-2 border-green-900 border-opacity-60 gap-3 w-[300px] p-6 rounded-md h-[460px] flex flex-col hover:bg-slate-100 hover:border-transparent ">
        <p className="text-green-700 font-semibold text-lg">{category}</p>
        <img className="w-[300px] rounded-md" src={imgUrl} alt={name} />
        <h3 className="font-medium text-md text-green-600">{name}</h3>
        <p className="text-sm text-slate-500">{content}</p>
    </div>
  );
};

export default ProductItem;
