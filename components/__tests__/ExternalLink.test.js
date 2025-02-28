import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ExternalLink from '@/components/ExternalLink';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';

const TEST_ID = 'external-link';

jest.mock('expo-web-browser', () => ({
  openBrowserAsync: jest.fn(),
}));

const mockPlatform = (os) => {
  Platform.OS = os;
};

describe('ExternalLink component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  
  it('renders correctly', () => {
    mockPlatform('ios');
    const { getByTestId } = render(
      <ExternalLink href="https://example.com" accessibilityLabel="Example Link" />
    );
    expect(getByTestId(TEST_ID)).toBeTruthy();
  });

  it('opens the link in a web browser on mobile platforms', async () => {
    mockPlatform('android');
    const { getByTestId } = render(<ExternalLink href="https://example.com" />);
    const link = getByTestId(TEST_ID);
    
    fireEvent.press(link);

    await waitFor(() => {
      expect(WebBrowser.openBrowserAsync).toHaveBeenCalledTimes(1);
      expect(WebBrowser.openBrowserAsync).toHaveBeenCalledWith('https://example.com');
    });
  });

  it('does not call WebBrowser.openBrowserAsync on web platforms', async () => {
    mockPlatform('web');
    const { getByTestId } = render(<ExternalLink href="https://example.com" />);
    const link = getByTestId(TEST_ID);
    
    fireEvent.press(link);

    await waitFor(() => {
      expect(WebBrowser.openBrowserAsync).not.toHaveBeenCalled();
    });
  });

  it('preserves passed props', () => {
    mockPlatform('ios');
    const { getByTestId } = render(
      <ExternalLink href="https://example.com" accessibilityHint="Test link" />
    );
    
    const link = getByTestId(TEST_ID);
    expect(link.props.accessibilityHint).toBe('Test link');
  });
});
