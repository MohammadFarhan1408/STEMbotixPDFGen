/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ProposalScreen from '../features/proposal/ProposalScreen';
import ReportScreen from '../features/report/ReportScreen';
import DeliveryScreen from '../features/delivery/DeliveryScreen';
import STEMbotixLogo from '../assets/images/STEMbotix-Logo.png';

const HomeScreen = () => {
  const [mode, setMode] = useState(null); // "Proposal" | "Report" | "Delivery"

  const handleSwitchMode = () => {
    setMode(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inner}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: 'column',
            gap: 8,
            marginBottom: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.header}>
            <Image source={STEMbotixLogo} style={styles.headerLeft} />
            <Text style={styles.headerRight}>PDF Generator</Text>
          </View>
          {mode && (
            <TouchableOpacity onPress={handleSwitchMode}>
              <Text style={styles.switchText}>← Switch Document Type</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* MODE SELECT */}
        {!mode ? (
          <View style={styles.grid}>
            {/* PROPOSAL */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => setMode('proposal')}
              activeOpacity={0.8}
            >
              <View
                style={[styles.iconBox, { backgroundColor: '#2563eb' }]}
              ></View>
              <Text style={styles.cardTitle}>Project Proposal</Text>
              <View style={styles.cardFooter}>
                <Text style={[styles.cardAction, { color: '#2563eb' }]}>
                  Start Building →
                </Text>
              </View>
            </TouchableOpacity>

            {/* REPORT */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => setMode('report')}
              activeOpacity={0.8}
            >
              <View
                style={[styles.iconBox, { backgroundColor: '#059669' }]}
              ></View>
              <Text style={styles.cardTitle}>Impact Report</Text>
              <View style={styles.cardFooter}>
                <Text style={[styles.cardAction, { color: '#059669' }]}>
                  Generate Report →
                </Text>
              </View>
            </TouchableOpacity>

            {/* Delivery */}
            <TouchableOpacity
              style={styles.card}
              onPress={() => setMode('delivery')}
              activeOpacity={0.8}
            >
              <View
                style={[styles.iconBox, { backgroundColor: '#e7000b' }]}
              ></View>
              <Text style={styles.cardTitle}>Delivery Certificate</Text>
              <View style={styles.cardFooter}>
                <Text style={[styles.cardAction, { color: '#e7000b' }]}>
                  Generate Certificate →
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.stepperContainer}>
            {mode === 'proposal' && (
              <ProposalScreen onBack={handleSwitchMode} />
            )}
            {mode === 'report' && <ReportScreen onBack={handleSwitchMode} />}
            {mode === 'delivery' && (
              <DeliveryScreen onBack={handleSwitchMode} />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#f8fafc',
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16, // reduce this
    flexDirection: 'row',
    justifyContent: 'space-between', // NOT space-around
    alignItems: 'center',
    marginBottom: 12,
  },
  headerLeft: {
    width: 140, // smaller & safer
    height: 45,
    resizeMode: 'contain',
  },
  headerRight: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2563eb',
    flexShrink: 1, // 🔥 THIS is critical
  },
  switchText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#94a3b8',
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  cardFooter: {
    marginTop: 16,
  },
  cardAction: {
    fontSize: 14,
    fontWeight: '700',
  },
  stepperContainer: {
    marginTop: 16,
  },
});
