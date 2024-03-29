import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import SubHeader from '../common/CommonComponent/SubHeader';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {medicineBestSellingData} from '../../api/constant';
import {HeartLightBlue} from '../../assets/svgs';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import strings from '../../themes/strings';

const SellingProduct = ({
  title,
  data,
  bestSeller,
}: {
  title: string,
  data: any,
  bestSeller: boolean,
}) => {
  const RenderDSpecialities = React.FC({item}: any) => {
    // console.log({item});

    return (
      <View style={localStyles.bestSellingWrapper}>
        <View style={localStyles.imgContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: responsiveWidth(1.5),
              marginTop: responsiveHeight(0),
              alignSelf: bestSeller ? 'none' : 'flex-end',
            }}>
            {bestSeller && (
              <Text style={localStyles.bestsellerText}>BESTSELLER</Text>
            )}
            <HeartLightBlue
              style={{alignSelf: 'flex-end'}}
              width={responsiveWidth(6)}
              height={responsiveHeight(4)}
            />
          </View>

          <Image source={item?.image} style={localStyles.itemImg} />

          {!bestSeller && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: responsiveHeight(2.3),
                marginLeft: responsiveWidth(2.4),
              }}>
              <Text style={localStyles.ratingText}>4.5</Text>
              <Image source={images.starBlack} style={localStyles.starBlack} />
              <Text style={localStyles.ratingText}>/5</Text>
            </View>
          )}
        </View>

        <Text style={localStyles.itemTitle}>{item?.title}</Text>

        <View style={localStyles.bottomWrapper}>
          <Text style={localStyles.priceText}>
            {'\u20B9'} {item?.price}
          </Text>

          <TouchableOpacity style={localStyles.addButtomWrapper}>
            <Text style={localStyles.addButtomText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}: any) => {
    // console.log({item});

    return <RenderDSpecialities key={index} item={item} />;
  };

  return (
    <View style={{flex: 1}}>
      <SubHeader title={title} />

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.ph20}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        //  getItemCount={getItemCount}
        //  getItem={getItem}
      />
    </View>
  );
};

export default React.memo(SellingProduct);

const localStyles = StyleSheet.create({
  bestSellingWrapper: {
    width: responsiveWidth(47),
    // height:moderateScale(160)
    marginBottom: responsiveHeight(2),
  },
  itemImg: {
    resizeMode: 'contain',
    width: responsiveWidth(35),
    height: responsiveHeight(14),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  imgContainer: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: responsiveWidth(43),
    height: moderateScale(190),
    borderRadius: responsiveWidth(3),
  },
  starBlack: {
    resizeMode: 'contain',
    width: responsiveWidth(3),
    height: responsiveHeight(1.5),
  },
  ratingText: {
    color: colors.black,
    ...typography.fontWeights.Regular,
    ...typography.fontSizes.f10,
  },
  itemTitle: {
    color: colors.black,
    ...typography.fontWeights.Regular,
    fontSize: responsiveFontSize(1.65),
    width: '90%',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(0.5),
  },
  priceText: {
    color: colors.black,
    ...typography.fontWeights.Bold,
    ...typography.fontSizes.f14,
  },
  addButtomWrapper: {
    borderWidth: 1,
    borderColor: colors.success,
    // width:responsiveWidth(43),
    // height:moderateScale(),
    borderRadius: responsiveWidth(1),
    backgroundColor: colors.lightSuccess,
    marginRight: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(0.3),
  },
  addButtomText: {
    color: colors.success,
    ...typography.fontWeights.SemiBold,
    // ...typography.fontSizes.f12,
    fontSize: responsiveFontSize(1.6),
  },
  bestsellerText: {
    color: colors.black,
    ...typography.fontWeights.Regular,
    // ...typography.fontSizes.f12,
    fontSize: responsiveFontSize(1.2),
  },
});
