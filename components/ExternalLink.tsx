import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback } from "react";
import { GestureResponderEvent, Platform } from "react-native";

interface ExternalLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "href"> {
  href: string;
}

export function ExternalLink(props: ExternalLinkProps) {
  const { href } = props;

  const handlePress = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
    ) => {
      const isWeb = Platform.OS === "web";

      if (!isWeb) {
        e.preventDefault();
        WebBrowser.openBrowserAsync(href);
      }
    },
    [href]
  );

  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={href}
      onPress={handlePress}
    />
  );
}
