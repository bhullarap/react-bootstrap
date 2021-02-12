import '@testing-library/jest-dom';
import 'mutationobserver-shim';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, params: Record<string, string>) => (params ? `${key} ${JSON.stringify(params)}` : key),
    i18n: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      changeLanguage: () => new Promise(() => {})
    }
  })
}));
