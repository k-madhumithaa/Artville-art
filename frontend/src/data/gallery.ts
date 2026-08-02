export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "blood-art", label: "Blood Art" },
  { id: "explosion-boxes", label: "Explosion Boxes" },
  { id: "frames", label: "Frames" },
  { id: "customized-gifts", label: "Customized Gifts" },
  { id: "other", label: "Other Artwork" },
];

export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  color: string;
  span: string;
}

// TODO: placeholder items — replace with real client photos when available.
// Swap the `color` gradient placeholder for an `image` URL once photos are ready.
export const galleryItems: GalleryItem[] = [
  { id: 1, category: "blood-art", title: "Blood Portrait", description: "Custom blood art portrait [Image placeholder]", color: "from-red-900/30 to-rose-900/20", span: "sm:col-span-1 sm:row-span-2" },
  { id: 2, category: "blood-art", title: "Blood Art Canvas", description: "Personalized blood art [Image placeholder]", color: "from-rose-900/25 to-red-900/15", span: "sm:col-span-1" },
  { id: 3, category: "explosion-boxes", title: "Explosion Box", description: "Multi-layered surprise box [Image placeholder]", color: "from-amber-900/25 to-yellow-900/15", span: "sm:col-span-1" },
  { id: 4, category: "explosion-boxes", title: "Birthday Explosion Box", description: "Birthday themed explosion box [Image placeholder]", color: "from-amber-900/20 to-orange-900/20", span: "sm:col-span-1 sm:row-span-2" },
  { id: 5, category: "frames", title: "Custom Frame", description: "Personalized photo frame [Image placeholder]", color: "from-emerald-900/25 to-teal-900/15", span: "sm:col-span-1" },
  { id: 6, category: "frames", title: "Wedding Frame", description: "Elegant wedding keepsake frame [Image placeholder]", color: "from-emerald-900/20 to-green-900/20", span: "sm:col-span-1" },
  { id: 7, category: "customized-gifts", title: "Couple Gift Set", description: "Personalized couple gift [Image placeholder]", color: "from-pink-900/25 to-rose-900/15", span: "sm:col-span-1 sm:row-span-2" },
  { id: 8, category: "customized-gifts", title: "Anniversary Gift", description: "Custom anniversary gift [Image placeholder]", color: "from-purple-900/25 to-indigo-900/15", span: "sm:col-span-1" },
  { id: 9, category: "other", title: "Handmade Scrapbook", description: "Custom scrapbook [Image placeholder]", color: "from-sky-900/25 to-blue-900/15", span: "sm:col-span-1" },
  { id: 10, category: "other", title: "Custom Decor", description: "Handmade home decor [Image placeholder]", color: "from-teal-900/25 to-cyan-900/15", span: "sm:col-span-1 sm:row-span-2" },
  { id: 11, category: "frames", title: "Photo Collage Frame", description: "Multi-photo custom frame [Image placeholder]", color: "from-emerald-900/20 to-lime-900/20", span: "sm:col-span-1" },
  { id: 12, category: "customized-gifts", title: "Birthday Gift Box", description: "Customized gift hamper [Image placeholder]", color: "from-orange-900/25 to-amber-900/15", span: "sm:col-span-1" },
];
