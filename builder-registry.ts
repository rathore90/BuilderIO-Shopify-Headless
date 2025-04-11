"use client";
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

const HerbalyAnnouncementBar = dynamic(
  () => import("./components/HerbalyAnnouncementBar/HerbalyAnnouncementBar"),
  { ssr: false }
);
const HerbalyBanner = dynamic(
  () => import("./components/HerbalyBanner/HerbalyBanner")
);
const HerbalyIconSection = dynamic(
  () => import("./components/HerbalyIconSection/HerbalyIconSection"),
  { ssr: false }
);
const HerbalyBlockImage = dynamic(
  () => import("./components/HerbalyBlockImage/HerbalyBlockImage"),
  { ssr: false }
);
const HerbalyRichText = dynamic(
  () => import("./components/HerbalyRichText/HerbalyRichText")
);
const HerbalyCarousel = dynamic(
  () => import("./components/HerbalyCarousel/HerbalyCarousel"),
  { ssr: false }
);
const HerbalyPaymentMethods = dynamic(
  () => import("./components/HerbalyPaymentMethods/HerbalyPaymentMethods"),
  { ssr: false }
);
const HerbalyFAQ = dynamic(() => import("./components/HerbalyFAQ/HerbalyFAQ"), {
  ssr: false,
});
const PriceCard = dynamic(
  () => import("./components/PriceCard/PriceCard")
);
const HerbalyPriceCard = dynamic(
  () => import("./components/PriceCard/HerbalyPriceCard")
);
const HerbalyVerifiedCustomer = dynamic(
  () => import("./components/HerbalyVerifiedCustomer/HerbalyVerifiedCustomer"),
  { ssr: false }
);
const HerbalyIngredientBlock = dynamic(
  () => import("./components/HerbalyIngredientBlock/HerbalyIngredientBlock"),
  { ssr: false }
);
const HerbalyBenefitsBlock = dynamic(
  () => import("./components/HerbalyBenefitsBlock/HerbalyBenefitsBlock"),
  { ssr: false }
);
const HerbalyBagComparison = dynamic(
  () => import("./components/HerbalyBagComparison/HerbalyBagComparison"),
  { ssr: false }
);
const HerbalySubFooter = dynamic(
  () => import("./components/HerbalySubFooter/HerbalySubFooter"),
  { ssr: false }
);
const HerbalyFooter = dynamic(
  () => import("./components/HerbalyFooter/HerbalyFooter"),
  { ssr: false }
);
const ArticleNumberedBlock = dynamic(
  () => import("./components/ArticleNumberedBlock/ArticleNumberedBlock"),
  { ssr: false }
);
const ArticleIngredientBlock = dynamic(
  () => import("./components/ArticleIngredientBlock/ArticleIngredientBlock"),
  { ssr: false }
);
const ArticleBenefitComponent = dynamic(
  () => import("./components/ArticleBenefitComponent/ArticleBenefitComponent"),
  { ssr: false }
);
const ArticleIconLabelBorder = dynamic(
  () => import("./components/ArticleIconLabelBorder/ArticleIconLabelBorder"),
  { ssr: false }
);

Builder.registerComponent(PriceCard, {
  name: "HerbalyPriceCard",
  inputs: [
    {
      name: "EmptyRadio",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2Feeff3a8a3f5247b3a319f1d94c767324",
    },
    {
      name: "SelectedRadio",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2Fc1f109a7e0124b1e8544894fee6e7e2c",
    },
    {
      name: "cardBackground",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please add hex code or linear-gradient property",
    },
    {
      name: "primaryTextColor",
      type: "color",
      defaultValue: "#fff",
      helperText: "Can be used of headings",
    },
    {
      name: "secondaryTextColor",
      type: "color",
      defaultValue: "#fff",
      helperText: "Can be used of smaller text",
    },
    {
      name: "subscribeAndSaveBackgroundColor",
      type: "color",
      defaultValue: "#fff",
      helperText: "Subscribe and save background color",
    },
    {
      name: "subscribeAndSaveTextColor",
      type: "color",
      defaultValue: "#fff",
      helperText: "Subscribe and save text color",
    },
    {
      name: "priceColor",
      type: "color",
      defaultValue: "#706861",
      helperText: "Price Text Color",
    },
    {
      name: "productDetails",
      type: "object",
      subFields: [
        {
          name: "productTitle",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Title",
        },
        {
          name: "productID",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product ID",
        },
        {
          name: "productVariantID",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Variant ID",
        },
      ],
    },
    {
      name: "priceCards",
      type: "list",
      defaultValue: [
        {
          priceCardHeading: "You are the best",
          reviewAuthor: "Jane Smith",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F95e09f4dcf704b2abf5096a462b55d12",
        },
      ],
      subFields: [
        {
          name: "cardHeaderBackground",
          type: "color",
          defaultValue: "#fff",
          helperText: "Card Header Background",
        },
        {
          name: "SlideLabel",
          type: "string",
          helperText: "Optional: Slide label text",
        },
        {
          name: "LabelBackgroundColor",
          type: "string",
          helperText: "Optional: Background Color: Use Hex Code",
        },
        {
          name: "LabelTextColor",
          type: "string",
          helperText: "Optional: Text Color: Use Hex Code",
        },
        {
          name: "extraCopy",
          type: "richText",
          defaultValue: "<p>+ Free Blood Sugar Meal Plan (30 Days)</p>",
          helperText: "Optional: Extra Copy",
        },
        {
          name: "extraCopyTextColor",
          type: "color",
          helperText: "Optional: Extra Copy Text Color",
        },
        {
          name: "priceCardHeading",
          type: "richText",
          defaultValue: "You are the best",
        },
        {
          name: "productQuantity",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Quantity",
        },
        {
          name: "ServingDetails",
          type: "object",
          defaultValue: {
            serving_icon:
              "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          },
          subFields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "serving_icon",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
        {
          name: "OneTimeOption",
          type: "object",
          defaultValue: [
            {
              Title: "Lorem ipsum dolor",
              Price: "$32",
              ShippingAmount: "$8",
              ShippingLabel: "SHIPPING",
              Link: "https://herbaly.myshopify.com/cart/clear?return_to=/cart/add?items[][id]=12772009934936%26items[][quantity]=1%26items[][selling_plan]=3437920393%26return_to=/checkout",
            },
          ],
          subFields: [
            {
              name: "Title",
              type: "string",
              defaultValue: "Lorem ipsum dolor",
            },
            {
              name: "OptionalTitle",
              type: "string",
              defaultValue: "Save 25%",
              helperText: "Optional",
            },
            {
              name: "Price",
              type: "string",
              defaultValue: "$32",
            },
            {
              name: "ShippingAmount",
              type: "string",
              defaultValue: "+$8",
            },
            {
              name: "ShippingLabel",
              type: "string",
              defaultValue: "Lorem dol",
            },
            {
              name: "Link",
              type: "string",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "SusbcriptionOptions",
          type: "object",
          defaultValue: {
            Title: "Susbscibe &",
            OptionalTitle: "Save 25%",
            Price: "$32",
            ShippingAmount: "$8",
            ShippingLabel: "SHIPPING",
            Link: "https://herbaly.myshopify.com/cart/clear?return_to=/cart/add?items[][id]=12772009934936%26items[][quantity]=1%26items[][selling_plan]=3437920393%26return_to=/checkout",
          },
          subFields: [
            {
              name: "subscriptionLabel",
              type: "string",
              defaultValue: "Lorem ipsum dolor",
              helperText: "Optional: Subscription label text",
            },
            {
              name: "subscriptionLabelBackgroundColor",
              type: "color",
              defaultValue: "#cd2f25",
              helperText: "Optional: Subscription Background Color",
            },
            {
              name: "subscriptionLabelTextColor",
              type: "color",
              defaultValue: "#fff",
              helperText: "Optional: Subscription Background Text Color",
            },
            {
              name: "Title",
              type: "string",
              defaultValue: "Lorem ipsum dolor",
            },
            {
              name: "OptionalTitle",
              type: "string",
              defaultValue: "Save 25%",
            },
            {
              name: "Price",
              type: "string",
              defaultValue: "$32",
            },
            {
              name: "ShippingAmount",
              type: "string",
              defaultValue: "+$8",
            },
            {
              name: "ShippingLabel",
              type: "string",
              defaultValue: "Lorem dol",
            },
            {
              name: "Link",
              type: "string",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "SlideButton",
          type: "object",
          defaultValue: {
            SlideDefaultLink: "",
            SlideButtonText: "",
            SlideButtonImage: "",
            SlideButtonTextColor: "#fff",
            SlideButtonBackground:
              "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
          },
          subFields: [
            {
              name: "SlideDefaultLink",
              type: "string",
              defaultValue: "",
            },
            {
              name: "SlideButtonText",
              type: "string",
              defaultValue: "",
            },
            {
              name: "SlideButtonTextColor",
              type: "color",
              defaultValue: "#fff",
            },
            {
              name: "SlideButtonBackground",
              type: "string",
              defaultValue:
                "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
              helperText: "Please upload the hex code or linear gradient value",
            },
            {
              name: "SlideButtonImage",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "StockLabel",
          type: "object",
          defaultValue: [
            {
              text: "In Stock",
              labelColor: "In Stock",
            },
          ],
          subFields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "labelColor",
              type: "string",
              defaultValue: "#03AE6E",
              helperText: "Please add the hex code",
            },
          ],
        },
        {
          name: "GuaranteeContainer",
          type: "object",
          defaultValue: {
            text: "30 Day Guarantee",
            image:
              "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          },
          subFields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyPriceCard, {
  name: "HerbalyPriceCardV2",
  inputs: [
    {
      name: "mobileCondensedDesign",
      type: "boolean",
      defaultValue: false,
      helperText: "Please enable to set the mobile condensed design",
    },
    {
      name: "productDetails",
      type: "object",
      subFields: [
        {
          name: "productTitle",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Title",
        },
        {
          name: "productID",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product ID",
        },
        {
          name: "productVariantID",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Variant ID",
        },
      ],
    },
    {
      name: "priceCards",
      type: "list",
      defaultValue: [
        {
          priceCardLabel: "BEST VALUE",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F95e09f4dcf704b2abf5096a462b55d12",
        },
      ],
      subFields: [
        {
          name: "productQuantity",
          type: "string",
          helperText: "Required for Conversion/Tracking: Product Quantity",
        },
        {
          name: "cardBorderColor",
          type: "string",
          defaultValue: "2px solid #363636",
          helperText:
            "Please add hex code wtih size. Example: 2px solid #363636",
        },
        {
          name: "cardBackground",
          type: "string",
          defaultValue: "#fff",
          helperText: "Please add hex code or linear-gradient property",
        },
        {
          name: "cardLabelBackground",
          type: "string",
          defaultValue:
            "linear-gradient(90deg, #F7B715 0.04%, #FF9432 100.01%)",
          helperText: "Use hex code or linear gradiant",
        },
        {
          name: "priceCardLabel",
          type: "richText",
          defaultValue: "BEST VALUE",
        },
        {
          name: "priceCardHeading",
          type: "richText",
          defaultValue: "<h1>1 BAG</h1>",
        },
        {
          name: "priceCardHeadingOTP",
          type: "richText",
          defaultValue: "<h1>1 BAG</h1>",
        },
        {
          name: "InstantSavings",
          type: "object",
          subFields: [
            {
              name: "instantSavingsLabel",
              type: "string",
              defaultValue: "INSTANT SAVINGS $",
            },
            {
              name: "instantSavingsColor",
              type: "color",
              defaultValue: "#706861",
            },
            {
              name: "OTPInstantSavings",
              type: "number",
              defaultValue: "8",
            },
            {
              name: "SUBSInstantSavings",
              type: "number",
              defaultValue: "12",
            },
          ],
        },
        {
          name: "cardImages",
          type: "object",
          subFields: [
            {
              name: "subImage",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F782dde4c433a4655a184c6ec83e3ffd6",
            },
            {
              name: "otpImage",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F2a6055be6a1b49498e1e9be912ac7406",
            },
          ],
        },
        {
          name: "pricingSection",
          type: "object",
          defaultValue: [
            {
              OTPPrice: "32",
              SUBSPrice: "24",
              moreInfo: "/bag",
            },
          ],
          subFields: [
            {
              name: "OTPPrice",
              type: "string",
              defaultValue: "32",
            },
            {
              name: "SUBSPrice",
              type: "string",
              defaultValue: "24",
            },
            {
              name: "perUnitText",
              type: "richText",
              defaultValue:
                '<span class="dynamic_price_info text-2xl">/bag</span>',
              helperText: "/bag or /bottle or anything else",
            },
            {
              name: "optionalTextField",
              type: "richText",
              defaultValue: "<p><span>Regularly</span> <s>$32</s></p>",
              helperText:
                "Optional Text: Please define color in the rich text editor",
            },
            {
              name: "optionalTextFieldOTP",
              type: "richText",
              defaultValue: "<p><span>Regularly</span> <s>$32</s></p>",
              helperText:
                "Optional Text: Please define color in the rich text editor",
            },
          ],
        },
        {
          name: "OneTimeOption",
          type: "object",
          defaultValue: [
            {
              Title: "One-time purchase",
              Link: "https://herbaly.myshopify.com/cart/clear?return_to=/cart/add?items[][id]=12772009934936%26items[][quantity]=1%26items[][selling_plan]=3437920393%26return_to=/checkout",
            },
          ],
          subFields: [
            {
              name: "Title",
              type: "richText",
              defaultValue: "One-time purchase",
            },
            {
              name: "Link",
              type: "string",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "SusbcriptionOptions",
          type: "object",
          defaultValue: {
            Title: "Subscribe and save 25%",
            PurchaseOption: "Delivery evey 30 days",
            Link: "https://herbaly.myshopify.com/cart/clear?return_to=/cart/add?items[][id]=12772009934936%26items[][quantity]=1%26items[][selling_plan]=3437920393%26return_to=/checkout",
          },
          subFields: [
            {
              name: "Title",
              type: "richText",
              defaultValue: "Subscribe and save 25%",
              helperText: "Subscribe and save 25%",
            },
            {
              name: "PurchaseOption",
              type: "richText",
              defaultValue: "Delivery evey 30 days",
              helperText: "Optional: Delivery evey 30 days",
            },
            {
              name: "Link",
              type: "string",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "SlideButton",
          type: "object",
          defaultValue: {
            SlideDefaultLink: "",
            SlideButtonText: "",
            SlideButtonImage: "",
            SlideButtonTextColor: "#fff",
            SlideButtonBackground:
              "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
          },
          subFields: [
            {
              name: "SlideDefaultLink",
              type: "string",
              defaultValue: "",
            },
            {
              name: "SlideButtonText",
              type: "string",
              defaultValue: "",
            },
            {
              name: "SlideButtonTextColor",
              type: "color",
              defaultValue: "#fff",
            },
            {
              name: "SlideButtonBackground",
              type: "string",
              defaultValue:
                "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
              helperText: "Please upload the hex code or linear gradient value",
            },
            {
              name: "SlideButtonImage",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
              helperText:
                "SVG supported - you can also uplaod the other formats as well",
            },
          ],
        },
        {
          name: "totalAmountColor",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "totalAmountLabel",
          type: "string",
          defaultValue: "Total: $",
        },
        {
          name: "totalAmountOTP",
          type: "string",
          defaultValue: "32",
        },
        {
          name: "totalAmountSUB",
          type: "string",
          defaultValue: "24",
        },
        {
          name: "StockLabel",
          type: "object",
          defaultValue: [
            {
              text: "In Stock",
              labelColor: "In Stock",
            },
          ],
          subFields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "labelColor",
              type: "string",
              defaultValue: "#03AE6E",
              helperText: "Please add the hex code",
            },
          ],
        },
        {
          name: "GuaranteeContainer",
          type: "object",
          defaultValue: {
            text: "30 Day Guarantee",
            image:
              "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          },
          subFields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyFAQ, {
  name: "HerbalyFAQ",
  inputs: [
    {
      name: "faqSectionLogos",
      type: "file",
      defaultValue: "",
    },
    {
      name: "faqSectionheading",
      type: "richText",
      defaultValue:
        "<p><strong>Amet consectetur</strong> Massa sapien sagittis </p>",
    },
    {
      name: "faqSectionSubHeading",
      type: "string",
      defaultValue: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "faqSectionPrimaryTextColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "faqSectionSecondaryTextColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "FAQ",
      type: "list",
      defaultValue: [
        {
          Question: "Lorem ipsum dolor sit amet consectetur.",
          Answer:
            "Lorem ipsum dolor sit amet consectetur. Ut risus neque aliquet aliquam porttitor elit.",
        },
      ],
      subFields: [
        {
          name: "Question",
          type: "string",
          helperText: "FAQ Question",
        },
        {
          name: "Answer",
          type: "string",
          helperText: "FAQ Answer",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyCarousel, {
  name: "HerbalyCarousel",
  inputs: [
    {
      name: "SlideHeadingTextColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "SlideParagraphTextColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "verifiedLabelTextColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "sliderArrowColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "sliderStarColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "CarouselList",
      type: "list",
      subFields: [
        {
          name: "CardBackground",
          type: "string",
          helperText: "Please add hex code or Linear Gradiant",
        },
        {
          name: "CardImage",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
        {
          name: "CardTitle",
          type: "string",
        },
        {
          name: "CardDesciption",
          type: "longText",
        },
        {
          name: "ReviewerContainer",
          type: "object",
          subFields: [
            {
              name: "userName",
              type: "string",
              defaultValue: "Gali G.",
            },
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
            {
              name: "verifiedLabel",
              type: "string",
              defaultValue: "Verified Customer",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyPaymentMethods, {
  name: "HerbalyPaymentMethods",
  inputs: [
    {
      name: "PaymentMethods",
      type: "list",
      subFields: [
        {
          name: "images",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyAnnouncementBar, {
  name: "HerbalyAnnouncementBar",
  inputs: [
    {
      name: "AnnouncementBar",
      type: "text",
    },
    {
      name: "herbalyLogo",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "Icon",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "textAlignment",
      type: "string",
      defaultValue: "Left",
      enum: ["Center", "Left", "End"],
    },
    {
      name: "BackgroundColor",
      type: "text",
    },
    {
      name: "TextColor",
      type: "text",
    },
  ],
});

Builder.registerComponent(HerbalyRichText, {
  name: "HerbalyRichText",
  inputs: [
    {
      name: "herbalyRichText",
      type: "richText",
      defaultValue:
        "<p><strong>Choose Your Wellness</strong> Collection Bundle</p>",
    },
    {
      name: "herbalyRichTextColor",
      type: "color",
      defaultValue: "#00675A",
    },
    {
      name: "sizeVariant",
      type: "string",
      defaultValue: "H1",
      enum: ["MainHeading", "H1", "H2", "H3", "H4", "H5"],
    },
    {
      name: "textAlignment",
      type: "string",
      defaultValue: "Center",
      enum: ["Center", "Left", "Right"],
    },
    {
      name: "headingBorderImage",
      type: "file",
      helperText: "Optional: Upload Border Image",
    },
    {
      name: "articlePage",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(HerbalyBanner, {
  name: "HerbalyBanner",
  inputs: [
    {
      name: "bannerBackground",
      type: "string",
      defaultValue: "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
      helperText: "Please add hex code or linear-gradient property",
    },
    {
      name: "firstSection",
      type: "object",
      defaultValue: {
        text: "Dina A.",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
      },
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "labelBackground",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "labelTextColor",
          type: "color",
          defaultValue: "#fff",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
    },
    {
      name: "bannerImage",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "bannerMobileImage",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "heading",
      type: "object",
      defaultValue: {
        bannerHeading:
          "Lorem ipsum dolor sit amet consectetur dolor sit ipsum dolor sit amet",
        headingTextcolor: "#797979",
      },
      subFields: [
        {
          name: "bannerHeading",
          type: "longText",
          defaultValue:
            "Lorem ipsum dolor sit amet consectetur dolor sit ipsum dolor sit amet",
        },
        {
          name: "headingTextcolor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "WisitaVideoScript",
      type: "longText",
      helperText: "Please upload the Wistia Video HTML only",
    },
    {
      name: "bannerButtonPositioning",
      type: "boolean",
      defaultValue: false,
      helperText: "Please enable to set the CTA positioning below the video",
    },
    {
      name: "paragraph",
      type: "object",
      defaultValue: {
        bannerParagraph:
          "Lorem ipsum dolor sit amet consectetur. Molestie suspendisse ornare eu velit eget duis  suspendisse ornare eu velit eget duis.",
        paragraphTextcolor: "#797979",
      },
      subFields: [
        {
          name: "bannerParagraph",
          type: "longText",
          defaultValue:
            "Lorem ipsum dolor sit amet consectetur. Molestie suspendisse ornare eu velit eget duis  suspendisse ornare eu velit eget duis.",
        },
        {
          name: "paragraphTextcolor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "bannerIconLabel",
      type: "list",
      defaultValue: [
        {
          text: "Lorem ipsum dolor",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "textColor",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
    },
    {
      name: "buttonObject",
      type: "object",
      subFields: [
        {
          name: "buttonText",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "buttonUrl",
          type: "url",
        },
        {
          name: "buttonTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "buttonBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "buttonIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
        {
          name: "reviewStars",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "reviewStarColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "reviewText",
          type: "string",
          defaultValue: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          name: "reviewTextColor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "buttonLabelObject",
      type: "object",
      subFields: [
        {
          name: "labelext",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "labelTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "labelBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "labelIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
      ],
    },
    {
      name: "bannerQuotes",
      type: "object",
      subFields: [
        {
          name: "image",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
        {
          name: "quote",
          type: "string",
          defaultValue:
            "\u201CLorem ipsum dolor sit amet consectetur. Vel rhoncus elit id et diam telluset diam tellus quam.\u201D",
        },
        {
          name: "quoteColor",
          type: "color",
          defaultValue: "#797979",
          helperText: "Quote Color",
        },
        {
          name: "userName",
          type: "string",
          defaultValue: "Patricia C.",
        },
        {
          name: "secondaryColor",
          type: "color",
          defaultValue: "#797979",
          helperText: "Secondary Color",
        },
        {
          name: "verifiedCustomer",
          type: "object",
          subFields: [
            {
              name: "image",
              type: "file",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
            {
              name: "text",
              type: "string",
              defaultValue: "Verified Customer",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyIconSection, {
  name: "HerbalyIconSection",
  inputs: [
    {
      name: "bannerIconLabel",
      type: "list",
      defaultValue: [
        {
          text: "Lorem ipsum dolor",
          textColor: "#706861",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "textColor",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyVerifiedCustomer, {
  name: "HerbalyVerifiedCustomer",
  inputs: [
    {
      name: "verifiedCustomerQuote",
      type: "object",
      defaultValue: {},
      subFields: [
        {
          name: "customerImage",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
        },
        {
          name: "quote",
          type: "string",
          defaultValue:
            "\u201CLorem ipsum dolor sit amet consectetur. Vel rhoncus elit id et diam telluset diam tellus quam.\u201D",
        },
        {
          name: "quoteColor",
          type: "color",
          defaultValue: "#797979",
          helperText: "Quote Color",
        },
        {
          name: "userName",
          type: "string",
          defaultValue: "Patricia C.",
        },
        {
          name: "textColor",
          type: "color",
          defaultValue: "#797979",
          helperText: "Secondary Text Color",
        },
        {
          name: "verifiedCustomer",
          type: "object",
          subFields: [
            {
              name: "image",
              type: "file",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
            {
              name: "text",
              type: "string",
              defaultValue: "Verified Customer",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyBlockImage, {
  name: "HerbalyBlockImage",
  inputs: [
    {
      name: "backgroundBlockImageSection",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please add hex code or linear-gradient property",
    },
    {
      name: "textImageComponent",
      type: "object",
      subFields: [
        {
          name: "image",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F22df2c0bbdf84fa58026237022fb8913",
        },
        {
          name: "textSectionBackground",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "heading",
          type: "string",
          defaultValue:
            "Lorem ipsum dolor sit amet consectetur. Vel rhoncus elit id et diam telluset diam tellus quam.",
        },
        {
          name: "headingTextColor",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "paragraph",
          type: "richText",
          defaultValue:
            "<p>Lorem ipsum dolor sit amet consectetur. Id turpis eget sapien vestibulum nam sed cursus nisi ac.</p>",
        },
        {
          name: "paragraphTextColor",
          type: "color",
          defaultValue: "#706861",
        },
        {
          name: "mediaSection",
          type: "object",
          subFields: [
            {
              name: "text",
              type: "string",
              defaultValue: "AS SEEN ON",
            },
            {
              name: "mediaImages",
              type: "list",
              subFields: [
                {
                  name: "mediaImage",
                  type: "file",
                  defaultValue: [
                    "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyIngredientBlock, {
  name: "HerbalyIngredientBlock",
  inputs: [
    {
      name: "ingredientSectionBackground",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please upload hex or linear gradient value",
    },
    {
      name: "ingredientHeadingColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "ingredientParagraphColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "ingredientSection",
      type: "object",
      defaultValue: {},
      subFields: [
        {
          name: "ingredientSectionHeading",
          type: "richText",
        },
        {
          name: "ingredientList",
          type: "list",
          subFields: [
            {
              name: "ingredientImage",
              type: "file",
              defaultValue: "",
            },
            {
              name: "ingredientNumber",
              type: "string",
              defaultValue: "1",
            },
            {
              name: "ingredientTitle",
              type: "string",
              defaultValue: "Sencha Leaf",
            },
            {
              name: "ingredientDescription",
              type: "longText",
              defaultValue:
                "What\u2019s the kryptonite of wellness? Free radicals. They wreakhavoc against your body in too many ways to count. Sencha Leaf contains potent antioxidants that fight against free radicals to help you body focus on what it needs to.",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyBenefitsBlock, {
  name: "HerbalyBenefitsBlock",
  inputs: [
    {
      name: "benefitsSectionBackground",
      type: "string",
      defaultValue: "#fff",
    },
    {
      name: "benefitsSectionHeadingColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "benefitsSectionParagraphColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "benefitsBlock",
      type: "object",
      subFields: [
        {
          name: "benefitsSectionHeading",
          type: "richText",
          defaultValue:
            "<p>Rev up your <strong>metabolism, boost your energy levels</strong>, and slim down the all-natural way!</p>",
        },
        {
          name: "benefitsLeftList",
          type: "list",
          subFields: [
            {
              name: "benefitIcon",
              type: "file",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
            {
              name: "benefitTitle",
              type: "string",
              defaultValue: "Supports Blood Sugar",
            },
            {
              name: "benefitDescription",
              type: "longText",
              defaultValue:
                "What\u2019s the kryptonite of wellness? Free radicals. They wreakhavoc against your body in too many ways to count. Sencha Leaf contains potent antioxidants that fight against free radicals to help you body focus on what it needs to.",
            },
          ],
        },
        {
          name: "benefitsMiddleObject",
          type: "object",
          subFields: [
            {
              name: "buttonObject",
              type: "object",
              subFields: [
                {
                  name: "buttonText",
                  type: "string",
                  defaultValue: "Lorem ipsum dolor",
                },
                {
                  name: "buttonUrl",
                  type: "url",
                },
                {
                  name: "buttonTextColor",
                  type: "color",
                  defaultValue: "#797979",
                },
                {
                  name: "buttonBackground",
                  type: "string",
                  defaultValue: "#797979",
                  helperText: "Please upload hex code or linear gradiant",
                },
                {
                  name: "buttonIcon",
                  type: "file",
                  defaultValue:
                    "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
                  helperText:
                    "SVG supported - you can also uplaod the other formats as well",
                },
                {
                  name: "reviewStars",
                  type: "boolean",
                  defaultValue: true,
                },
                {
                  name: "reviewStarColor",
                  type: "color",
                  defaultValue: "#797979",
                },
                {
                  name: "reviewText",
                  type: "string",
                  defaultValue: "Lorem ipsum dolor sit amet consectetur.",
                },
                {
                  name: "reviewTextColor",
                  type: "color",
                  defaultValue: "#797979",
                },
              ],
            },
            {
              name: "buttonLabelObject",
              type: "object",
              subFields: [
                {
                  name: "labelext",
                  type: "string",
                  defaultValue: "Lorem ipsum dolor",
                },
                {
                  name: "labelTextColor",
                  type: "color",
                  defaultValue: "#797979",
                },
                {
                  name: "labelBackground",
                  type: "string",
                  defaultValue: "#797979",
                  helperText: "Please upload hex code or linear gradiant",
                },
                {
                  name: "labelIcon",
                  type: "file",
                  defaultValue:
                    "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
                  helperText:
                    "SVG supported - you can also uplaod the other formats as well",
                },
              ],
            },
            {
              name: "benefitsMiddleImage",
              type: "file",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
          ],
        },
        {
          name: "benefitsRightList",
          type: "list",
          subFields: [
            {
              name: "benefitIcon",
              type: "file",
              defaultValue:
                "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            },
            {
              name: "benefitTitle",
              type: "string",
              defaultValue: "Supports Blood Sugar",
            },
            {
              name: "benefitDescription",
              type: "longText",
              defaultValue:
                "What\u2019s the kryptonite of wellness? Free radicals. They wreakhavoc against your body in too many ways to count. Sencha Leaf contains potent antioxidants that fight against free radicals to help you body focus on what it needs to.",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyBagComparison, {
  name: "HerbalyBagComparison",
  inputs: [
    {
      name: "bagComparisonSectionBackground",
      type: "string",
      defaultValue:
        "linear-gradient(180deg, #F0F6FF -1.24%, #F8FAFF 9.94%), #EEFFF4",
      helperText: "Please upload the hex code or linear gradient value",
    },
    {
      name: "bagComparisonSectionHeading",
      type: "richText",
      defaultValue:
        "<p>This Is <strong>How herbaly compares</strong> to its competitions</p>",
    },
    {
      name: "bagComparisonHeadingColor",
      type: "color",
      defaultValue: "00675A",
    },
    {
      name: "bagComparisonListTextColor",
      type: "color",
      defaultValue: "00675A",
    },
    {
      name: "bagComparisonPositiveListIcon",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F8bc9c60954be4c528b385538a5bd09d0",
      helperText: "Tick Mark Icon: SVG supported along with other file format",
    },
    {
      name: "bagComparisonNegativeListIcon",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F8bc9c60954be4c528b385538a5bd09d0",
      helperText: "Cross Icon: SVG supported along with other file format",
    },
    {
      name: "bagComparisonVersusIcon",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F25da4d3d6b3c4e89897f3906b65506ac",
      helperText: "Versus Icon: SVG supported along with other file format",
    },
    {
      name: "bagComparisonLists",
      type: "object",
      subFields: [
        {
          name: "bagComparisonLeftHeading",
          type: "string",
          defaultValue: "Herbaly Wellness Collection",
        },
        {
          name: "bagComparisonLeftImage",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F25da4d3d6b3c4e89897f3906b65506ac",
        },
        {
          name: "bagComparisonLeftList",
          type: "list",
          subFields: [
            {
              name: "bagComparisonLeftListTitle",
              type: "string",
              defaultValue: "Increased energy levels",
            },
          ],
        },
        {
          name: "bagComparisonRightListHeading",
          type: "string",
          defaultValue: "Other Herbal Teas",
        },
        {
          name: "bagComparisonRightImage",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Ff63f09205f1c4e8c898d0db3ad500e5a%2F25da4d3d6b3c4e89897f3906b65506ac",
        },
        {
          name: "bagComparisonRightList",
          type: "list",
          subFields: [
            {
              name: "bagComparisonRightListTitle",
              type: "string",
              defaultValue: "Overpriced, over hyped supplements",
            },
          ],
        },
      ],
    },
    {
      name: "buttonObject",
      type: "object",
      subFields: [
        {
          name: "buttonText",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "buttonUrl",
          type: "url",
        },
        {
          name: "buttonTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "buttonBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "buttonIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
        {
          name: "reviewStars",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "reviewStarColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "reviewText",
          type: "string",
          defaultValue: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          name: "reviewTextColor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "buttonLabelObject",
      type: "object",
      subFields: [
        {
          name: "labelext",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "labelTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "labelBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "labelIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalySubFooter, {
  name: "HerbalySubFooter",
  inputs: [
    {
      name: "subFooterBackground",
      type: "string",
      defaultValue: "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
      helperText: "Please add hex code or linear-gradient property",
    },
    {
      name: "subFooterImage",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "heading",
      type: "object",
      defaultValue: {
        bannerHeading:
          "Lorem ipsum dolor sit amet consectetur dolor sit ipsum dolor sit amet",
        headingTextcolor: "#797979",
      },
      subFields: [
        {
          name: "subFooterHeading",
          type: "longText",
          defaultValue:
            "Lorem ipsum dolor sit amet consectetur dolor sit ipsum dolor sit amet",
        },
        {
          name: "headingTextcolor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "paragraph",
      type: "object",
      defaultValue: {
        bannerParagraph:
          "Lorem ipsum dolor sit amet consectetur. Molestie suspendisse ornare eu velit eget duis  suspendisse ornare eu velit eget duis.",
        paragraphTextcolor: "#797979",
      },
      subFields: [
        {
          name: "subFooterParagraph",
          type: "richText",
          defaultValue:
            "Lorem ipsum dolor sit amet consectetur. Molestie suspendisse ornare eu velit eget duis  suspendisse ornare eu velit eget duis.",
        },
        {
          name: "paragraphTextcolor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "buttonObject",
      type: "object",
      subFields: [
        {
          name: "buttonText",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "buttonUrl",
          type: "url",
        },
        {
          name: "buttonTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "buttonBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "buttonIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
        {
          name: "reviewStars",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "reviewStarColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "reviewText",
          type: "string",
          defaultValue: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          name: "reviewTextColor",
          type: "color",
          defaultValue: "#797979",
        },
      ],
    },
    {
      name: "buttonLabelObject",
      type: "object",
      subFields: [
        {
          name: "labelext",
          type: "string",
          defaultValue: "Lorem ipsum dolor",
        },
        {
          name: "labelTextColor",
          type: "color",
          defaultValue: "#797979",
        },
        {
          name: "labelBackground",
          type: "string",
          defaultValue: "#797979",
          helperText: "Please upload hex code or linear gradiant",
        },
        {
          name: "labelIcon",
          type: "file",
          defaultValue:
            "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
          helperText:
            "SVG supported - you can also uplaod the other formats as well",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyFooter, {
  name: "HerbalyFooter",
  inputs: [
    {
      name: "FooterBackground",
      type: "string",
      defaultValue: "linear-gradient(180deg, #FEE6D0 0%, #FFF8F0 38.76%)",
      helperText: "Please add hex code or linear-gradient property",
    },
    {
      name: "copyrightText",
      type: "string",
      defaultValue:
        "\u00A9 2023 Herbaly\u2122 Marketplace Inc. All Rights Reserved.",
    },
    {
      name: "footerLogo",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
    },
    {
      name: "primaryTextColor",
      type: "color",
      defaultValue: "#706861",
    },
    {
      name: "footerList",
      type: "list",
      subFields: [
        {
          name: "linkTitle",
          type: "string",
          defaultValue: "Disclaimer",
        },
        {
          name: "footerLink",
          type: "string",
          defaultValue: "https://herbaly.com/pages/disclaimer",
        },
      ],
    },
  ],
});

Builder.registerComponent(ArticleNumberedBlock, {
  name: "ArticleNumberedBlock",
  inputs: [
    {
      name: "articleNumberedBackground",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please upload hex or linear gradient value",
    },
    {
      name: "articleNumberedHeadingColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "articleNumberedParagraphColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "articleNumberedBorderTop",
      type: "file",
      helperText: "Optional: Upload Border-Top Image",
    },
    {
      name: "articleNumberedSection",
      type: "object",
      subFields: [
        {
          name: "articleNumberedHeading",
          type: "string",
        },
        {
          name: "articleNumberedImage",
          type: "file",
          defaultValue: "",
        },
        {
          name: "articleNumberedMobileImage",
          type: "file",
          defaultValue: "",
        },
        {
          name: "articleNumberedParagraph",
          type: "richText",
          defaultValue: "Sencha Leaf",
        },
      ],
    },
  ],
});

Builder.registerComponent(ArticleIngredientBlock, {
  name: "ArticleIngredientBlock",
  inputs: [
    {
      name: "articleIngredientCardBackground",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please upload hex or linear gradient value",
    },
    {
      name: "articleIngredientHeadingColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "articleIngredientParagraphColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "articleIngredientList",
      type: "list",
      subFields: [
        {
          name: "articleIngredientImage",
          type: "file",
          defaultValue: "",
        },
        {
          name: "articleIngredientHeading",
          type: "string",
        },
        {
          name: "articleIngredientParagraph",
          type: "richText",
          defaultValue: "Sencha Leaf",
        },
      ],
    },
  ],
});

Builder.registerComponent(ArticleBenefitComponent, {
  name: "ArticleBenefitComponent",
  inputs: [
    {
      name: "articleBenefitBackgroundColor",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please upload hex or linear gradient value",
    },
    {
      name: "articleBenefitCardBackground",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "articleBenefitTextColor",
      type: "color",
      defaultValue: "#333",
    },
    {
      name: "articleBenefitList",
      type: "list",
      subFields: [
        {
          name: "articleBenefitTopIcon",
          type: "file",
          defaultValue: "",
        },
        {
          name: "articleBenefitText",
          type: "string",
        },
        {
          name: "articleBenefitBottomIcon",
          type: "file",
          defaultValue: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(ArticleIconLabelBorder, {
  name: "ArticleIconLabelBorder",
  inputs: [
    {
      name: "IconLabelBorderBackgroundColor",
      type: "string",
      defaultValue: "#fff",
      helperText: "Please upload hex or linear gradient value",
    },
    {
      name: "IconLabelBorderTextColor",
      type: "color",
      defaultValue: "#8D8D8D",
    },
    {
      name: "articlePage",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "IconLabelBorder",
      type: "object",
      subFields: [
        {
          name: "iconLabelBorderIcon",
          type: "file",
          defaultValue: "",
        },
        {
          name: "iconLabelBorderText",
          type: "string",
        },
        {
          name: "iconLabelBorderFile",
          type: "file",
          defaultValue: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(HerbalyPriceCard, {
  name: "HerbalyPriceCard",
  inputs: [
    {
      name: "mobileCondensedDesign",
      type: "string",
    },
    {
      name: "priceCards",
      type: "string",
    },
    {
      name: "productDetails",
      type: "string",
    },
  ],
});

Builder.registerComponent(HerbalyPriceCard, {
  name: "HerbalyPriceCard",
  inputs: [
    {
      name: "mobileCondensedDesign",
      type: "string",
    },
    {
      name: "priceCards",
      type: "string",
    },
    {
      name: "productDetails",
      type: "string",
    },
  ],
});
