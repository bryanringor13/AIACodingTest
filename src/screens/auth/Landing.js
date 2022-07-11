import React, {useCallback, useMemo, useRef} from 'react';
import {
  BottomModal,
  Box,
  Button,
  Container,
  CustomBackdrop,
  Image,
} from '../../components';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// Images
import Logo from '../../res/images/logo.png';
import Login from './Login';
import {Keyboard} from 'react-native';
import {UserData} from '../../hooks/user';
import {setLoading} from '../../hooks/user/actions';

const Landing = () => {
  const dispatch = UserData()[1];
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['99.99%'], []);

  const loginButtonHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      Keyboard.dismiss();
    }
  }, []);

  const handleSheetClose = () =>
    new Promise(resolve => {
      Keyboard.dismiss();
      bottomSheetRef.current?.close();
      setTimeout(() => {
        dispatch(setLoading());
        resolve();
      }, 500);
    });

  return (
    <BottomSheetModalProvider>
      <Container>
        <Box>
          <Image source={Logo} />
        </Box>
        <Box>
          <Button title="Proceed to Login" onPress={loginButtonHandler} />
        </Box>
        <BottomModal
          ref={bottomSheetRef}
          enablePanDownToClose
          index={-1}
          snapPoints={snapPoints}
          backdropComponent={CustomBackdrop}
          onChange={handleSheetChanges}>
          <Login closeEvent={handleSheetClose} />
        </BottomModal>
      </Container>
    </BottomSheetModalProvider>
  );
};

export default Landing;
