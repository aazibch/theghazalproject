interface BannerProps {
  size?: 'md' | 'lg';
  bgImage: string;
  heading: string;
  contentText: React.ReactNode;
  contentButtons: React.ReactNode;
}

export default function Banner({
  size = 'md',
  bgImage,
  heading,
  contentText,
  contentButtons
}: BannerProps) {
  let parentClassNames =
    'py-24 px-4 bg-no-repeat bg-center bg-cover text-white';
  let contentTextClassNames = 'mb-8';

  if (size === 'lg') {
    parentClassNames = 'py-28 bg-no-repeat bg-center bg-cover text-white';
    contentTextClassNames = 'mb-8 text-lg';
  }

  return (
    <div
      className={parentClassNames}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="uppercase text-center text-xl mb-10">{heading}</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className={contentTextClassNames}>{contentText}</p>

        <div className="flex justify-center">{contentButtons}</div>
      </div>
    </div>
  );
}
