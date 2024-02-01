export const formatToRupiah = (number: number) => {
  const formater = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formater.format(number);
};
