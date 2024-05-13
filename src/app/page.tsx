import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/08baa2ab-fb2a-4ea4-ad1b-9c87ba2afd80-730tk2.png",
  "https://utfs.io/f/b7f83cca-fcc0-43b7-8d98-7d19836e7f9a-dz5gws.png",
  "https://utfs.io/f/aa296371-c52c-431e-8a7c-42b005f04f36-dz5gwq.png",
  "https://utfs.io/f/8cc13f2c-a36c-4e78-b569-df95fbfaafba-dz5gvw.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
