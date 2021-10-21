export const addCpfCnpjMask = (receiveData) => {
  const input = receiveData || "";
  const sanitizedInput = input.replace(/[^0-9]/g, "");
  const isCPF = sanitizedInput.length <= 11;
  const cpfRule =
    /([0-9]{1,3})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?\-?([0-9]{1,2})?/;
  const cnpjRule =
    /([0-9]{1,2})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?\/?([0-9]{1,4})?\-?([0-9]{1,2})?/;
  const activeRule = isCPF ? cpfRule : cnpjRule;

  console.log("activeRule", activeRule);

  return sanitizedInput.replace(activeRule, (match, ...captures) => {
    const [capture1, capture2, capture3, capture4, capture5] = captures;

    const cpfMask = [
      [capture1, `${capture1}`],
      [capture2, `.${capture2}`],
      [capture3, `.${capture3}`],
      [capture4, `-${capture4}`],
    ];

    const cnpjMask = [
      [capture1, `${capture1}`],
      [capture2, `.${capture2}`],
      [capture3, `.${capture3}`],
      [capture4, `/${capture4}`],
      [capture5, `-${capture5}`],
    ];

    const activeMask = isCPF ? cpfMask : cnpjMask;

    return activeMask
      .reduce((acc, [key, value]) => (key ? [...acc, value] : acc), [])
      .join("");
  });
};
