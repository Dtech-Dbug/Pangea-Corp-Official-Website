export const DRIVE = [
  'https://drive.google.com/file/d/1BYrc6Zweo2qd15Ep0HW3beCGLhqv6cGY/view?usp=drive_link',
  "https://drive.google.com/file/d/1EocEPnpm5DUvGF2vI9byYQzRxGNA2E6J/view?usp=drive_link",
  "https://drive.google.com/file/d/1z_T7Eesxfp55DMRZasvhYesy_azo4fCe/view?usp=drive_link",
  "https://drive.google.com/file/d/1W_GIVAccNYtzgxIxzgfv95Z5z1Gb1OL_/view?usp=drive_link",
  "https://drive.google.com/file/d/1716NBRqy9_-IsJe2tTW0hOEh44ULuqzH/view?usp=drive_link"
]

const getDirectLinkFromDrive = (url) => {
  const fileId = url.match(/\/d\/(.*?)\//)[1];
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

export const DirectDownloadLinks = DRIVE.map((item) =>
  getDirectLinkFromDrive(item)
);