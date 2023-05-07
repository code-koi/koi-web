import React from 'react';

const Logo = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="34" height="34" fill="url(#pattern0)" />
      <rect width="34" height="34" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_18_236" transform="scale(0.015625)" />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_18_236" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_18_236"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAlrSURBVHic7Zt7sFVVHcd/i4c8BZRCnvLIxClkTKh8EUxlXisoc5i0sXSml0KYWDk1kqIMSYCQevExDtSEKWpJc2cCu05GKIjcnEhwAAsYwHtN5IoIF7xc7v30x1qL/Tvr7rP3Ofvs2zjT/f6z916/51pnPX+/dUQ60YlO/D/DVKoA6CMit4pInTHm2Qp1GRGZJCKfEJEhrrhBRP4pIpuNMccr0d8hAG7G4gRwWQV6pgE7KI6jwFPA5a6hPhgA7lBO1gODM+j4MdAaVPg9oLlIY9QBn+yI+pQNYG7g3AbgtDLkpwBtTrYRmAkMUvShwFXAb4Ajyk4rsAw4vWNqViKAeTG/0L0lynYh6vaHgXNT+AcAdwHHla1XsvS63ADMd460OGdwv+hK4BpgYILsZFWRW8qw+RGgVsnuAj6aT43KBHCPc+I4MMp1Y41WYJP75cYEsj9XPGeUabcr8FDQCGXpyAXAQudAk/u+AFiNncRC7ApkfQXejNFrgF8BTwB9E+zrIbgGO6wGAQPyr228A4ud8feC8tOB54MGWFtE9gjB0gaMUHJVCfYN8KTiPaHejwHPYSfWPvnWPHJgqTP2riq7GNiuHGkG7iRYHYDvKJ4LY3TfCTwI9EzxoS/wOsmoB67Lr+aR8fudgUagF7AAOKkMb4mrnJMdoXhXlGDrTKAGeADoEdCmKJuHgR8633YFDbEU6JJX/QWodoqPBcaOAbcB3VLkn3b8rcDnUninK/21Yc8A9ij6VFdmsKtRg6ItqLzmkdHltMcLwNgS5cdgt7kAh4BLE3h7A+uVnWf0rwlcqWhvosY9MAzYquhfqazmcmrsHVBKjwCzKLOLuV/Ib4Xfx87svYrw9qJwcp0T0PUv/SzQT9FGAW872k5Semea092dAY+DwOgK9F1P4d5/D3BDnJNAP6JJtgUYr2i3UYid2IOWcfQZivb1rP7qNdxjUWZlkc4JwOZA7w5gWgzv+URL3jpVPo547MOeJxYQnT2ezOro12IMXJ+96gW6uwDfBfYH+v8MDAl4Fyv6pa7MYOcSgI3YnlkM+7I4OJz2210ostRlBdATu5RpW/XARMVzFtHB6FFV/ldXtgnoD3wfu0vcjx1mh4FtwMwsjuld10b1XnS7Wgmwa79eaZopHPNzsNvub6iyRxzvf/J2ZhLR+HkMu1eHYBucN7AbH429qNk9ht8fstoINkyVOGGwkRiAJuxQ8L1hZy5G4u1+mXjMS5C5RfH1T9Jfznr9WRHx42+RMeYNiQKX7U5zeQDoLiLV7rNRRGoU+VbgzCKiLeq9e5KNchrAByyaROQ+9+5b9x3PhJ10HgB+UIbuYpgqIiPd+89ERC+1vUXk2iJyJ9V79s2OBzYC43dqy1T5Flf2jPvuA7yout8XKrT7B6fnIHZV6I7dKXqsLyL3E8WTGDMstQdMV7zVqrzNPf1Z/lER0Xv5ZVSy3YyGXK0x5n1jTIuI7FX0i4hffc5yzyZjzJEkA6U2wNXuudUYsz2OARu08F1yv3ueIyJXlmgj1NdbRM52n68qUqt67y4in4oR93NT6jKY2gDAcBGZ4D5XB2Q/2fQQEX8oOSQik0XksPvOGoTQwRMfbjMSVc7j/BjZj7vn7jQjpfSASyTq4msC2lvuOUqirl9tjNkjIj5NljWB0SIiuHffzc8TER/ra1Jlp+B6jm+Av6cZKaUB/Dg8ISJbAlqDe56tyla65zb3HEWRo20SjDFNIuL36n7n9033RKJhNjQQvVCimb8uzU45DbDNGNMc0Ha4pw88HBKRf7t3P/kYSVmLE+ArUIUNqc9w3y9KNBkOCmS+6J5tIvJSmoFSGsDH8l+LoW0NvhuMMb7b+kZBCjcm5eAx9xwgIusl2nfME9sjRdqv81e55yZjTOWToERLSpyyzVJYOa3Pd9u9FaS114iIzyUMc8+VxpjnJJofToXTgXESzQl/LMVAYgNgkws+8NiuAdwa+7IqGg10c2P+Cle2uRRH4uDW/Rmq6AURudG75566DrPcs01Efl+KjbRNik4mFNtQrBIRfy+gp4h8WuzS5Gfrx0txpBiMMbXALBEZKyK3G2OOhSwiIsCHJJoka9xKVBmAD6st5U1FeAa606FHDfCOe99d4U4wyTcfHV7nvucrHybnZWSAUnpzAl9cihwSUlo5+PYvZ+NxYCQ2DwGwMU8jPYgCIHMS+PphgxQaS3JzJN6m73X3AqvcextwUd6GfNz/YVV2BjYrXKXKxlMY1l5Owt2ACn3qr+y8pN5/l0XZTGyA8Ag2zFwPrAVudEPAR4H+omR87P0ohddZJgJvKIcagdmkJDcz+DyR9jhAEDUuVdm+GGUeB1ULNyqZSYpnUaBvCIUJE1yjfI+ckpLYhIlGGy4XmEXZU05JK/ALYAXtx7PHx5Tc31zZCaDdiQwby9seyNcBE0LeDD4vDvTeX4mya5Wim1T5VGxaSeNHij6eKDOzGzUUFE9X4FuO7tEM3FCBv6MpTHb8iRxyfH5JeRsYqWj9sBkZj/pA9qeKtoHkhObdROGsVuCaMv3sgk286qtyB8jj5gfwVaX0VWCYovXBppo9qgLZFYq2HnseL2bnEqK01VGCS1MJcmOxKfcQy7PXur2RXyrFDdih4beZ0xRtdyAXZomnp9j5PFGA9ekU3m7YFeeY0r9LfVcnyZcF7HhdSiH2YG9jzqbw1teUQLYHNhReQ/FYveb/tdNzEhtyi+MZB7ysbLZhU159ibba98XJVgTgOuxeIAmvk5ILxI77h4G5MbQJSte3A9pp2MtRelO1HbhY8bzrypfmVvHAid7YiwS1FB509BW0VSk69HWV4QHNEF2LWRjQ1gaN/TxBbJ+oNy7Or9YJwHa7gdiZWDt4d4rME8ASYq63A285HQ8G5eGtLlyFVwMXOB7/oywM9XY4sOlqva4/BHTNoMMfsm4PaGOw12o30f4KfSP2no+/E3BPvrUrvQLnBr9ULXBOGfI6ezspgW8g9gLVStVgr2DvBQHMz6dGGQAMJrodjvtV7iLlji5wHtEY3kGJ5wPssTdE0SH4PwH2PvCyoKseBX4LXA2MULyDsTs5v4S1Ap8pw1Y3YF3QAHM7pGLlAns8rSMerRRuX33Z7Ax2BlO4RN/REfXJBOzSdjn2dHmU4ngN+FIFdi4jWo6LhulKRYf8+wp7KJooNjcwVES6iki9iPxDRDao5ElW/VVic45LXAqtE53oRCcy4b9phTAYxUQjkwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default Logo;
