import React, { ReactNode, useCallback, useImperativeHandle, useRef, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { snapPoints } from '@/utils/sheetConstants';

// Define the interface for the ref
interface BottomSheetScrollHandle {
  handleBottomSheet: () => void;
}

interface BottomSheetScrollProps {
  children: ReactNode; // Updated type
}

// ForwardRef component with proper typing
const BottomSheetScroll = forwardRef<BottomSheetScrollHandle, BottomSheetScrollProps>(({ children }, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    handleBottomSheet: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Renders
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheetScroll;
