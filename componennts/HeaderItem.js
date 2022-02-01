
function HeaderItem({title, Icon}) {
  return (
  <div className="group flex items-center cursor-pointer flex-col
                w-12 sm:w-20 hover:text-white 
  ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      <p className="opacity-0 tracking-widest group-hover:opacity-100">{title}</p>
  </div>
  );
}

export default HeaderItem;
