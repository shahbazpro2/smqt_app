import React from 'react';
import { Text, Image, View, Dimensions, ScrollView } from 'react-native';

import RecitingHead from './RecitingHead';
import { getExactSize, colors } from './../../components/CommonFun';
import HTML from "react-native-render-html";
import { useWindowDimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('screen').width);

function RecitingPage() {
    const contentWidth = useWindowDimensions().width;

    const htmlContent = `
    <div style="padding:10px;display:flex">
    <p style="font-size:14px;color:black;font-family:urdu;letter-spacing:-1">نبی ﷺ پر درود بھیجنے کے بارے میں اللہ تعالیٰ نے اپنے کلام میں فرمایا ہے کہ:</p>
    <div style="background-color:#fafafa;">
    Enjoy a webview-free and blazing fast application
    </div>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    </div>
`;

   
    const getString=()=>{
        let str="dffsd sdfd fsd {hy} dsfsd dfd dfs";

var part = str.substring(
    str.lastIndexOf("{") + 1, 
    str.lastIndexOf("}")
);

var ss=str.indexOf(part)

var myString = str.substring(0, ss-1) + `<Text style={{color:'red'}}>hello</Text>` + str.substring(ss+2 + 1);
return <Text> {myString}</Text>
    }
    return (
        <View style={{ flex: 1 }}>
            
            <RecitingHead />
            <ScrollView style={{ zIndex: -1 }} showsVerticalScrollIndicator={false}>
            {<HTML source={{ html: htmlContent }} contentWidth={contentWidth} />}
                <Text style={{ fontFamily: 'urdu', letterSpacing: getExactSize(-4), textAlign: 'right', fontSize: getExactSize(18), marginTop: getExactSize(20), marginHorizontal: (4 * screenWidth) / 100 }}>نبی ﷺ پر درود بھیجنے کے بارے میں اللہ تعالیٰ نے اپنے کلام میں فرمایا ہے کہ:</Text>
                <View style={{ marginHorizontal: (4 * screenWidth) / 100, backgroundColor: '#fafafa', borderRadius: getExactSize(10), padding: getExactSize(5) }}>
                    <Text style={{ fontFamily: 'arabic', textAlign: 'right', color: '#009200', fontSize: getExactSize(18), marginHorizontal: (2 * screenWidth) / 100 }}> اِنَّ اللّٰہَ وَمَلٰئِکَتَہٗ یُصَلُّوْنَ عَلَی النَّبِیِّؕ       یٰۤاَیُّھَاالَّذِیْنَ اٰمَنُوْ اصَلُّوا عَلَیْہِ وَسَلِّمُوْاتَسْلِیْمًاؕ        <Text style={{ fontFamily: 'urdu', textAlign: 'right', fontSize: getExactSize(16), color: '#000', marginHorizontal: (4 * screenWidth) / 100 }}>(پ22الاحزاب56)</Text></Text>
                    <Text style={{ fontFamily: 'urdu', textAlign: 'right', fontSize: getExactSize(14), fontStyle: 'italic', marginHorizontal: (2 * screenWidth) / 100 }}>بےشک اللہ تعالیٰ اور اس کے فرشتےنبی اکرمﷺ پر صلوٰۃبھیجتے ہیں۔اےایمان والو! تم بھی آپﷺپر صلوٰۃبھیجاکرواور خوب سلام بھی بھیجا کرو۔</Text>
                </View>
                <Text style={{ fontFamily: 'urdu', letterSpacing: getExactSize(-4), textAlign: 'right', fontSize: getExactSize(18), marginTop: getExactSize(10), marginHorizontal: (4 * screenWidth) / 100 }}>یہ آیت مدینہ منورہ میں نازل ہوئی اور اس آیت پاک میں اللہ تعالیٰ نے اہلِ ایمان کو حکم دیاکہ تم حضورﷺ پر درود وسلام بھیجوجس طرح میں اور میرےفرشتے انﷺپر سلام بھیجتے ہیں۔
                    اہلِ تفسیر نےاس آیت کی تفسیر کرتے ہوئےلکھا ہےکہ اللہ تعالیٰ کا درود بھیجنے کا یہ مفہوم ہے کہ اللہ تعالیٰ اپنے محبوب کےذکر کو بلند کر کے اس کے دین کو غلبہ دے کر اور اس کی شریعت پر عمل برقرار رکھ کے اس دنیامیں حضورﷺ کی عزت وشان بڑھاتا ہے اور روزِمحشر امت کے لئےحضورﷺکی شفاعت قبول فرما کر اور حضور کو بہترین اجروثواب عطا کر کے اور مقام محمود پر فائز کرنے کے بعد اولین اور آخرین کے لئےحضورﷺ کی بزرگی کو نمایاں کرکے اور تمام مقربین پر حضورکو سبقت بخش کر حضورﷺ کی شان کو آشکارافرماتا ہے۔اس سے معلوم ہوا کہ حضورﷺ پر اللہ تعالیٰ کا درود بھیجنےکامطلب یہ ہے کہ اللہ تعالیٰ آپ ﷺکی تعریف کرتاہے آپ ﷺ کا نام بلند کرتاہے،آپﷺ پر اپنی رحمتوں کی بارش فرماتا ہے اور آپﷺ کے درجات میں اضافہ کرتاہے۔
                    منقول ہے کہ جب اس کی نسبت ملائکہ کی طرف ہو تو صلوٰۃکا معنی دعاہے کہ ملائکہ اللہ تعالیٰ کی بارگاہ میں اس کے پیارے رسول ﷺ کے درجات کی بلندی اور مقامات کی رفعت کے لئےدست بَدعاہیں۔اس جملہ میں <Text style={{ fontFamily: 'arabic', letterSpacing: getExactSize(0), textAlign: 'right', color: colors.green, fontSize: getExactSize(18), }}>اِنَّ اللّٰہَ وَمَلٰئِکَتَہٗ</Text> الخ میں اگرآپ غورفرمائیں تو آپ کومعلوم ہو گاکہ یہ جملہ اسمیہ ہے لیکن اس کی خبر جملہ فعلیہ ہے تو یہاں دونوں جملے جمع کر دیئےگئےہیں ۔اس میں راز یہ ہے کہ جملہ  اسمیہ استمرارودوام پر دلالت کرتا ہے اور فعلیہ تجددو حدوث کی طرف اشارہ کرتا ہےیعنی اللہ تعالیٰ ہمیشہ ہر دم، ہر گھڑی اپنے نبی مکرمﷺ پر رحمتیں نازل فرماتا ہےاور آپﷺ کی شان بیان فرماتا ہے۔ اسی طرح اس کے فرشتے بھی اس کی تعریف وتوصیف میں رطب اللسان رہتے ہیں۔اس سے معلوم ہوا کہ فرشتوں کی طرف سے آپﷺپر صلوٰۃ کا مطلب یہ ہےکہ فرشتے آپﷺ کے حق میں اللہ سےدعا کرتے ہیں کہ وہ آپﷺ کو اعلیٰ سے اعلیٰ مراتب عطا فرمائے۔ آپﷺ کے دین کو دنیا میں غلبہ عطا فرمائے، آپﷺ کی شریعتِ مطہرہ کو فروغ بخشے یعنی فرشتےہر لحاظ سے آپﷺ کی تعریف و توصیف بیان کرتے ہیں۔
                    اہلِ ایمان کی طرف سے صلوٰۃ کا مطلب بھی اللہ کی بارگاہ میں حضورﷺ کی شان بلند وبالاکرنے کی التجا ہے یعنی اہلِ ایمان پر یہ واضع کیا گیا کہ جب میں اپنے محبوب پر برکات کانزول کرتاہوں اور میرے فرشتے انﷺ کی شان میں تعریف کرتے ہیں اور ان کی بلندی مقام کی دعاکرتے ہیں توایمان والو ! تم بھی میرے محبوب کی تعریف کرو۔
                    منقول ہے کہ جب مومن بارگاہِ الہٰی میں عرض کرتا ہے اے اللہ تعالیٰ! اپنے رسول ﷺ کے ذکرکو بلند فرما۔ان ﷺکے دین کو غلبہ دےاور اس کی شریعت کو باقی رکھ کراس دنیا میں انﷺ کی شان بلند فرما اور روزِ محشر ان کی شفاعت قبول فرما۔اجر اور ثواب کو کئی گناکر دے۔
                    اگر چہ صلوٰۃ بھیجنے کا ہمیں حکم دیا جا رہا ہےلیکن ہم نہ شانِ رسالت کو کماحقہ جانتے ہیں اور نہ اس کا حق ادا کر سکتےہیں ۔ اس لئے اعترافِ عجز کرتے ہوئے ہم عرض کرتے ہیں<Text style={{ fontFamily: 'arabic', letterSpacing: getExactSize(0), textAlign: 'right', color: colors.green, fontSize: getExactSize(18), }}>اَللّٰھُمَّ صَلِّ</Text>الخ یعنی مولا کریم تو ہی اپنے محبوبﷺپر درود بھیج جو انﷺ کی شان کے شایاں ہے۔
                </Text><Text></Text><Text></Text>
            </ScrollView>
        </View>
    )
}


export default RecitingPage
