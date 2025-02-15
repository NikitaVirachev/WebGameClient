export const acceptJsend = async (response) => {
  try {
    const result = await response.json();

    switch (result.status) {
      case 'success':
        return result.data;

      case 'fail':
        console.warn('Ошибка запроса:', result.data);
        throw new Error(`Fail: ${JSON.stringify(result.data)}`);

      case 'error':
        console.error(
          `Ошибка сервера: ${result.message} (Код: ${result.code || 'N/A'})`,
        );
        throw new Error(`Error: ${result.message}`);

      default:
        throw new Error('Неизвестный статус JSend');
    }
  } catch (err) {
    console.error('Ошибка обработки:', err);
    throw err;
  }
};
