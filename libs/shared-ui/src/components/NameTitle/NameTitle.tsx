type NameBlockProps = {
  name: string;
  title: string;
};

export const NameTitle = ({ name, title }: NameBlockProps) => (
  <div className="bg-accent p-3 w-full">
    <div className="text-center relative border-4 border-current py-5 px-4">
      <h1 className="relative z-[2] text-5xl font-bold text-text-primary uppercase m-0 max-sm:text-[2rem]">
        {name}
      </h1>
      <span className="absolute left-0 right-0 bottom-0 translate-y-1/2 mx-auto w-[60%] z-[1] text-xl leading-none bg-accent text-center block max-sm:w-4/5 max-sm:text-base whitespace-nowrap">
        {title}
      </span>
    </div>
  </div>
);
