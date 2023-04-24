export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const viewBuffer = new DataView(arrayBuffer);
  viewBuffer.setInt8(position, value);

  return viewBuffer;
}
