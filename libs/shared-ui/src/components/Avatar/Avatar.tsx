type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img className="max-w-[420px] max-h-[420px] block" src={src} alt={alt} />
      </div>
    </div>
  );
};

