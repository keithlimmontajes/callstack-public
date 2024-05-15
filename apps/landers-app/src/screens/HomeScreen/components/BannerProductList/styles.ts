import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  blockBanner: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  bannerAdsImg: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    height: scale(140),
    backgroundColor: '#F8F8F8',
  },
  seeAllBtnBlock: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllTextProdCount: {
    color: '#F8F8F8',
    marginRight: scale(5),
    fontSize: scale(13),
  },
  seeAllBtnText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#83B151',
    textTransform: 'uppercase',
  },
});

export default styles;
