import { useSelector } from 'react-redux';
import { AppState } from '../index';

export function useBlockNumber(): number | undefined {
  return useSelector((state: AppState) => state.application.blockNumber);
}

export function useIsDarkTheme(): boolean {
  return useSelector((t: AppState) => t.application.theme) === 'light';
}
