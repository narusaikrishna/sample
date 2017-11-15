//
//  CalendarManager.m
//  LoginProject
//
//  Created by Chitaranjan sahu on 12/11/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
@implementation CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent: (NSString *) name location:(NSString*) location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
