
// <br /><br />
// <Row style={{ marginTop: '10px' }} >
//   <Col>
//     <p className='aboutheader1'>Our company provide a best </p>
//     <p className='aboutheader1'> horizon tech solutions</p>

//     <p className='aboutheader2' >Experience the transformative power of innovation and seamless solutions with <br /> dynamics. Our journey doesn't end with the delivery of a solution.</p>
//   </Col>
// </Row>

// <Row className='aboutcardindex' >
//   <Col md='3' >
//     <Card className='aboutcard' >
//       <h1>300+</h1>
//       <h4>Projects</h4>
//       <p>We are spread around the world.</p>
//     </Card>
//   </Col>
//   <Col md='3' >
//     <Card className='aboutcard' >
//       <h1>100%</h1>
//       <h4>Client Satisfaction</h4>
//       <p>Our clients a happy with our service.</p>
//     </Card>

/**
 * test
 */

// public class StringFormatter {
//     public static String reverseString(String str) {
//         char ch[] = str.toCharArray();
//         String rev = "";
//         for (int i = ch.length - 1; i >= 0; i--) {
//             rev += ch[i];
//         }
//         return rev;
//     }
// }

// public class test {

// public static void main(String[] args) {
// int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
// int temp[] = {};
// int arrlength = arr.length;

// for (int i = 0; i < arrlength; i++) {
// for (int j = 0; j < arrlength; j++) {
// if (arr[i] == arr[j]) {
// temp = arr[i];

// }
// }
// }
// }
// }

/**
 * test
 */
public class test {

    public static void main(String[] args) {
        String originalStr = "Hello";
        String reversedStr = "";
        System.out.println("Original string: " + originalStr);

        for (int i = 0; i < originalStr.length(); i++) {

            reversedStr = originalStr.charAt(i) + reversedStr;
        }

        System.out.println("Reversed string: " + reversedStr);
    }
}