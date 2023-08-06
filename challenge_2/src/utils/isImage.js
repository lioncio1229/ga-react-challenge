
export default function (filepath)
{
  const match = filepath.match(/\.[a-zA-Z0-9]+$/);
  if(match)
  {
    const fileExt = match[0];
    return ['.png', '.jpg', '.jpeg'].includes(fileExt);
  }
  return false;
}