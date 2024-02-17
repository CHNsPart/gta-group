// useCustomBackButton.ts

import { useRouter } from 'next/navigation';

interface UseCustomBackButton {
  handleBackButtonClick: () => void;
}

const useCustomBackButton = (): UseCustomBackButton => {
  const router = useRouter();

  const handleBackButtonClick = (): void => {
    router.back();
  };

  return { handleBackButtonClick };
};

export default useCustomBackButton;
